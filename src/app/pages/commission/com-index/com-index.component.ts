import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiHttpClient } from '../../../api-client';

@Component({
  selector: 'app-com-index',
  templateUrl: './com-index.component.html',
  styleUrl: './com-index.component.css'
})
export class ComIndexComponent {
  commissions: any[] = [];
  private http: ApiHttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = new ApiHttpClient(httpClient);
  }
  
  
  ngOnInit(): void {

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJTaGFiYmlyIiwibGFzdE5hbWUiOiJEYXdvb2RpIiwiaXNzIjpudWxsLCJleHAiOjE3MDI4OTM4NjAsImlhdCI6MTcwMjg5MzUwMH0.qut9ARs7D7fcH0fSFNpTfFNUsj0KzlbWd1IKd-sxDMo";

    this.http.get('commissions', token).subscribe(
      (data: any) => { 
        this.commissions = data;
        console.log(this.commissions);
      },
      error => {
        console.error('Error fetching commissions:', error);
      }
    );
  }
}
