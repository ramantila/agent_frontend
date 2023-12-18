import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJTaGFiYmlyIiwibGFzdE5hbWUiOiJEYXdvb2RpIiwiaXNzIjpudWxsLCJleHAiOjE3MDI4OTM4NjAsImlhdCI6MTcwMjg5MzUwMH0.qut9ARs7D7fcH0fSFNpTfFNUsj0KzlbWd1IKd-sxDMo";


    this.http.get("debts",token).subscribe(
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
