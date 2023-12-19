import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';
import { AuthtokenService } from '../../../authtoken.service';

@Component({
  selector: 'app-com-create',
  templateUrl: './com-create.component.html',
  styleUrl: './com-create.component.css'
})
export class ComCreateComponent {
  commission: any;

  private http: ApiHttpClient;

  constructor(private httpClient: HttpClient, 
    private router: Router,
    private authService: AuthtokenService
  )
  {
    this.http = new ApiHttpClient(httpClient)
  }

  onSubmit(commissionForm: NgForm): void{
    const token = this.authService.getToken();

    if(token){
      this.http.post("add/commission",commissionForm.value, token).subscribe(
        (data: any) => {
          this.commission = data;
          console.log(this.commission);
          this.router.navigate(['/commissions/view']);
        },
        (error: any) => {
          if(error.status === 403){
            this.authService.logout();
            this.router.navigate(['']);
          }
          console.error('Error fetching debts:', error);
        }
      )
    }
    else{
      this.authService.logout();
      this.router.navigate(['']);
    }
   
  }
}
