import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../api-client';
import { AuthtokenService } from '../../authtoken.service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrl: './debt.component.css',
})
export class DebtComponent {

  debts: any[] = [];
  debt: any;

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient, 
    private location: Location, 
    private router: Router,
    private authService: AuthtokenService)
  {
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

    const token = window.localStorage.getItem('auth_token');

    if(token)
    {

      this.http.get("debts",token).subscribe(
        (data: any) =>{
          this.debts = data;
          console.log(this.debts);
          
        },
        error => {
          if (error.status === 403) { 
            this.authService.logout();
            this.router.navigate([''])
          }
          console.error('Error fetching commissions:', error);
        }
      );

    }
    else
    {
      this.authService.logout();
      this.router.navigate([''])
    }
    
  }

}
