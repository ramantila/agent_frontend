import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';
import { AuthtokenService } from '../../../authtoken.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  sales: any[] = [];

  private http: ApiHttpClient;

  constructor(private httpclient: HttpClient,
    private router: Router,
    private authService: AuthtokenService
  )
  {
    this.http = new ApiHttpClient(httpclient);
  }

  ngOnInit(): void{
    const token = this.authService.getToken()

    if(token)
    {
      this.http.get("sales", token).subscribe(
        (data: any) => {
          this.sales = data;
          console.log(this.sales);
        },
        error => {
          if (error.status === 403) { 
            this.authService.logout();
            this.router.navigate([''])
          }
          console.error('Error fetching commissions:', error);
        }
      )
    }
    else
    {
      this.authService.logout();
      this.router.navigate([''])
    }
    
  }
}
