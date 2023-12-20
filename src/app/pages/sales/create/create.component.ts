import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';
import { AuthtokenService } from '../../../authtoken.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  sale: any;

  private http: ApiHttpClient;

  constructor(private httpClient: HttpClient, 
    private router: Router,
    private authService: AuthtokenService
  )
  {
    this.http = new ApiHttpClient(httpClient)
  }

  onSubmit(saleForm: NgForm): void{
    const token = this.authService.getToken();

    if(token){
      this.http.post("add/sale",saleForm.value, token).subscribe(
        (data: any) => {
          this.sale = data;
          console.log(this.sale);
          this.router.navigate(['/sales/view']);
        },
        (error: any) => {
          this.handleError({ status: 403})
          console.error('Error fetching debts:', error);
        }
      )
    }
    else{
      this.handleElse()
    }

  }

  handleError(error: any): void {
    if (error.status === 403) {
      this.authService.logout();
      this.router.navigate(['']);
    }
  }

  handleElse(): void{
    this.authService.logout();
    this.router.navigate([''])
  }

}
