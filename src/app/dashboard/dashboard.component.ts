import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../api-client';
import { AuthtokenService } from '../authtoken.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  debts: any[] = [];
  commissions: any[] = [];
  debt: any;
  totalDebt: number = 0;

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient, 
    private router: Router,
    private authService: AuthtokenService
  )
  {
    this.http = new ApiHttpClient(httpclient);
  }

  ngOnInit(): void{

    const token = this.authService.getToken();

    if (token) {
      this.http.get("total-debts", token).subscribe(
        (data: any) => {
          this.debts = data;
          this.calculateTotalDebt();
          console.log(this.debts);
        },
        (error: any) => { 
          this.handleError({ status: 403})
          console.error('Error repayment Dashboard:', error);
        }
      );
    
      this.http.get('total-commissions', token).subscribe(
        (data: any) => {
          this.commissions = data;
          console.log(this.commissions);
        },
        (error: any) => { 
          this.handleError({ status: 403})
          console.error('Error repayment Dashboard:', error);
        }
      );
    } 
    else {
      this.authService.logout();
      this.router.navigate(['']);
    }
   
  }

  handleError(error: any): void {
    if (error.status === 403) {
      this.authService.logout();
      this.router.navigate(['']);
    }
    console.error('Error fetching Dashboard:', error);
  }

  calculateTotalDebt(): void {
    this.totalDebt = this.debts.reduce((total: number, debt: any) => total + debt.amount - debt.repayment, 0);
  }

}
