import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiHttpClient } from '../../api-client';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {

  expenses: any[] = [];

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient){
    this.http = new ApiHttpClient(httpclient);
  }

  ngOnInit(): void{
    this.http.get("expenses").subscribe(
      (data: any) =>{
        this.expenses = data;
        console.log(this.expenses);
      },
      error => {
        console.error('Error fetching commissions:', error);
      }
    )
  }

}
