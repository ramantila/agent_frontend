import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';

@Component({
  selector: 'app-expe-create',
  templateUrl: './expe-create.component.html',
  styleUrl: './expe-create.component.css'
})
export class ExpeCreateComponent {
  sale: any;

  private http: ApiHttpClient;

  constructor(private httpClient: HttpClient, private router: Router){
    this.http = new ApiHttpClient(httpClient)
  }

  onSubmit(saleForm: NgForm): void{
    this.http.post(
      "add/expense",
      saleForm.value
    )
    .subscribe(
      (data: any) => {
        this.sale = data;
        console.log(this.sale);
        this.router.navigate(['/expenses/view']);
      },
      (error: any) => {
        console.error('Error fetching debts:', error);
      }
    )
  }
}
