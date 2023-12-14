import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiHttpClient } from '../../../api-client';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
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
