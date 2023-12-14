import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiHttpClient } from '../../api-client';
import { ApiResponse } from '../../api-reponse';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrl: './commission.component.css'
})
export class CommissionComponent {

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
