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
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJTaGFiYmlyIiwibGFzdE5hbWUiOiJEYXdvb2RpIiwiaXNzIjpudWxsLCJleHAiOjE3MDI4OTM4NjAsImlhdCI6MTcwMjg5MzUwMH0.qut9ARs7D7fcH0fSFNpTfFNUsj0KzlbWd1IKd-sxDMo";

    this.http.get("sales", token).subscribe(
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
