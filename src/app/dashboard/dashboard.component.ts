import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../api-client';

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

  constructor(private httpclient: HttpClient, private router: Router){
    this.http = new ApiHttpClient(httpclient);
  }

  ngOnInit(): void{

    const token = window.localStorage.getItem('auth_token');

    if(token)
    {
      this.http.get("total-debts", token).subscribe(
        (data: any) =>{
          this.debts = data;
          this.calculateTotalDebt(); 
          console.log(this.debts);
        },
        error => {
          console.error('Error fetching commissions:', error);
        }
      )

      this.http.get('total-commissions', token).subscribe(
        (data: any) => { 
          this.commissions = data;
          console.log(this.commissions);
        },
        error => {
          console.error('Error fetching commissions:', error);
        }
      );
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }

  calculateTotalDebt(): void {
    this.totalDebt = this.debts.reduce((total: number, debt: any) => total + debt.amount - debt.repayment, 0);
  }

}
