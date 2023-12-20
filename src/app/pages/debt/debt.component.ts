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


   // ============================= onSubmit ========================
  onSubmit(debtForm: NgForm): void{

    const token = this.authService.getToken();
    if(token){
      this.http.post("add/debt", debtForm.value, token).subscribe(
        (data: any) => {
          this.debt = data;
          console.log(this.debt);
          // this.location.go(this.location.path());
          location.reload();
        },
        (error: any) => { 
          this.handleError({ status: 403})
          console.error('Error submit debts:', error);
        }
      );
    }
    else{
      this.handleElse();
    }
 
  }

  // ============================= onUpdate ========================
  onUpdate(id: string, debtUpdateForm: NgForm): void {

    const token = this.authService.getToken();

    if(token){

      this.http.commonUpdate('debt',id, debtUpdateForm.value, token).subscribe(
        (data: any) => {
          this.debt = data;
          console.log(this.debt);
          // this.location.go(this.location.path());
          location.reload();
        },
        (error: any) => { 
          this.handleError({ status: 403})
          console.error('Error update debts:', error);
        }
      )

    }
    else{
      this.handleElse();
    }

  }


  // ============================= onRepayment ========================
  onRepayment(id: string, debtRepaymentForm: NgForm): void {

    const token = this.authService.getToken();

    if(token){

      this.http.commonUpdate('repayment',id,debtRepaymentForm.value, token).subscribe(
        (data: any) => {
          this.debt = data;
          console.log(this.debt);
          // this.location.go(this.location.path());
          location.reload();
        },
        (error: any) => { 
          this.handleError({ status: 403})
          console.error('Error repayment debts:', error);
        }
      )

    }
    else{
      this.handleElse();
    }

  }

   // ============================= get records ========================
  ngOnInit(): void{

    const token = this.authService.getToken();

    if(token)
    {

      this.http.get("debts",token).subscribe(
        (data: any) =>{
          this.debts = data;
          console.log(this.debts);
          
        },
        error => {
         this.handleError({ status: 403})
         console.error('Error fetching debts:', error);
        }
      );

    }
    else
    {
     this.handleElse();
    }
    
  }

  handleError(error: any): void {
    if (error.status === 403) {
      this.authService.logout();
      this.router.navigate(['']);
    }
  }

  handleElse(): void{
    this.authService.logout();
    this.router.navigate(['']);
  }

}
