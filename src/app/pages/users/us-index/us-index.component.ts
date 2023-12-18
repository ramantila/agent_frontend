import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiHttpClient } from '../../../api-client';

@Component({
  selector: 'app-us-index',
  templateUrl: './us-index.component.html',
  styleUrl: './us-index.component.css'
})
export class UsIndexComponent {
  users: any[] = [];
  user: any;

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient){
    this.http = new ApiHttpClient(httpclient);
  }

  onSubmit(userForm: NgForm): void{
    this.http.post(
      "add/user",
      userForm.value,
    ).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
        // this.location.go(this.location.path());
        location.reload();
      },
      (error: any) => { 
        console.error('Error fetching debts:', error);
      }
    );
  }

  ngOnInit(): void{
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJTaGFiYmlyIiwibGFzdE5hbWUiOiJEYXdvb2RpIiwiaXNzIjpudWxsLCJleHAiOjE3MDI4OTM4NjAsImlhdCI6MTcwMjg5MzUwMH0.qut9ARs7D7fcH0fSFNpTfFNUsj0KzlbWd1IKd-sxDMo";

    this.http.get("users", token).subscribe(
      (data: any) =>{
        this.users = data;
        console.log(this.users);
      },
      error => {
        console.error('Error fetching commissions:', error);
      }
    )
  }
}
