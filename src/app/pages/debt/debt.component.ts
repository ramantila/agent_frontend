import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ApiHttpClient } from '../../api-client';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrl: './debt.component.css',
})
export class DebtComponent {

  debts: any[] = [];
  debt: any;

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient, private location: Location){
    this.http = new ApiHttpClient(httpclient);
  }

  onSubmit(debtForm: NgForm): void{
    this.http.post(
      "add/debt",
      debtForm.value,
    ).subscribe(
      (data: any) => {
        this.debt = data;
        console.log(this.debt);
        // this.location.go(this.location.path());
        location.reload();
      },
      (error: any) => { 
        console.error('Error fetching debts:', error);
      }
    );
  }

  onUpdate(id: string, debtUpdateForm: NgForm): void {
    this.http.commonUpdate(
      'debt',
      id, 
      debtUpdateForm.value
    ).subscribe(
      (data: any) => {
        this.debt = data;
        console.log(this.debt);
        // this.location.go(this.location.path());
        location.reload();
      },
      (error: any) => { 
        console.error('Error fetching debts:', error);
      }
    )
  }

  onRepayment(id: string, debtRepaymentForm: NgForm): void {
    this.http.commonUpdate(
      'repayment',
      id, 
      debtRepaymentForm.value
    ).subscribe(
      (data: any) => {
        this.debt = data;
        console.log(this.debt);
        // this.location.go(this.location.path());
        location.reload();
      },
      (error: any) => { 
        console.error('Error fetching debts:', error);
      }
    )
  }

  ngOnInit(): void{
    this.http.get("debts").subscribe(
      (data: any) =>{
        this.debts = data;
        console.log(this.debts);
      },
      error => {
        console.error('Error fetching commissions:', error);
      }
    )
  }

}
