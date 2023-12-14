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
    this.http.get('commissions').subscribe(
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
