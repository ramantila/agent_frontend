import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';
import { AuthtokenService } from '../../../authtoken.service';

@Component({
  selector: 'app-expe-index',
  templateUrl: './expe-index.component.html',
  styleUrl: './expe-index.component.css'
})
export class ExpeIndexComponent {
  expenses: any[] = [];

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient,
    private router: Router,
    private authService: AuthtokenService
  )
  {
    this.http = new ApiHttpClient(httpclient);
  }

  ngOnInit(): void{
    
    const token = this.authService.getToken()

    if(token){
      this.http.get("expenses",token).subscribe(
        (data: any) =>{
          this.expenses = data;
          console.log(this.expenses);
        },
        error => {
          this.handleError({ status: 403})
          console.error('Error fetching Expense:', error);
        }
      )
    }
    else{
     this.handleElse();
    }
  }

  handleError(error: any): void {
    if (error.status === 403) {
      this.authService.logout();
      this.router.navigate(['']);
    }
  }

  handleElse(): void{
    this.authService.logout()
    this.router.navigate([''])
  }
}
