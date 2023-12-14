import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';

@Component({
  selector: 'app-com-create',
  templateUrl: './com-create.component.html',
  styleUrl: './com-create.component.css'
})
export class ComCreateComponent {
  commission: any;

  private http: ApiHttpClient;

  constructor(private httpClient: HttpClient, private router: Router){
    this.http = new ApiHttpClient(httpClient)
  }

  onSubmit(commissionForm: NgForm): void{
    this.http.post(
      "add/commission",
      commissionForm.value
    )
    .subscribe(
      (data: any) => {
        this.commission = data;
        console.log(this.commission);
        this.router.navigate(['/commissions/view']);
      },
      (error: any) => {
        console.error('Error fetching debts:', error);
      }
    )
  }
}
