import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../api-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: any;

  private http: ApiHttpClient;

  constructor(private httpClient: HttpClient, private router: Router){
    this.http = new ApiHttpClient(httpClient)
  }

  onSubmit(loginForm: NgForm): void{
    this.http.loginPost(
      "login",
      loginForm.value
    )
    .subscribe(
      (data: any) => {
        this.login = data;
        console.log(this.login);

        if (data && data.token) {
          window.localStorage.setItem("auth_token", data.token)
          this.router.navigate(['dashboard'])
        }
        else{
          console.error('Token not found in login response');
        }
      },
      (error: any) => {
        console.error('Error fetching debts:', error);
      }
    )
  }
}
