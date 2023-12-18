import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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

  constructor(private httpclient: HttpClient){
    this.http = new ApiHttpClient(httpclient);
  }

  ngOnInit(): void{

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJTaGFiYmlyIiwibGFzdE5hbWUiOiJEYXdvb2RpIiwiaXNzIjpudWxsLCJleHAiOjE3MDI4OTM4NjAsImlhdCI6MTcwMjg5MzUwMH0.qut9ARs7D7fcH0fSFNpTfFNUsj0KzlbWd1IKd-sxDMo";

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

  calculateTotalDebt(): void {
    this.totalDebt = this.debts.reduce((total: number, debt: any) => total + debt.amount - debt.repayment, 0);
  }

}
