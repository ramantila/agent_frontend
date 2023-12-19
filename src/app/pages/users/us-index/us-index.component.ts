import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';
import { AuthtokenService } from '../../../authtoken.service';

@Component({
  selector: 'app-us-index',
  templateUrl: './us-index.component.html',
  styleUrl: './us-index.component.css'
})
export class UsIndexComponent {
  users: any[] = [];
  user: any;

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient,
    private router: Router,
    private authService: AuthtokenService
  )
  {
    this.http = new ApiHttpClient(httpclient);
  }

  onSubmit(userForm: NgForm): void{

    const token = this.authService.getToken();

    if(token){
      this.http.post("add/user", userForm.value,token).subscribe(
        (data: any) => {
          this.user = data;
          console.log(this.user);
          // this.location.go(this.location.path());
          location.reload();
        },
        (error: any) => { 
          if(error.status === 403){
            this.authService.logout();
            this.router.navigate(['']);
          }
          console.error('Error fetching debts:', error);
        }
      );
    }
    else{
      this.authService.logout();
      this.router.navigate(['']);
    }
   
  }

  ngOnInit(): void{
    const token = this.authService.getToken();
    
    if(token){
      this.http.get("users", token).subscribe(
        (data: any) =>{
          this.users = data;
          console.log(this.users);
        },
        error => {
          if(error.status === 403){
            this.authService.logout()
            this.router.navigate([''])
          }
          console.error('Error fetching commissions:', error);
        }
      )
    }
    else{ 
      this.authService.logout()
      this.router.navigate([''])
    }
   
  }
}
