import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiHttpClient } from '../../api-client';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

  sales: any[] = [];

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient){
    this.http = new ApiHttpClient(httpclient);
  }

  ngOnInit(): void{
    this.http.get("sales").subscribe(
      (data: any) => {
        this.sales = data;
        console.log(this.sales);
      },
      error => {
        console.error('Error fetching commissions:', error);
      }
    )
  }

}
