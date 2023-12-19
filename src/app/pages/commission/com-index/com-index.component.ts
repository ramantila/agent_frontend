import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpClient } from '../../../api-client';
import { AuthtokenService } from '../../../authtoken.service';

@Component({
  selector: 'app-com-index',
  templateUrl: './com-index.component.html',
  styleUrl: './com-index.component.css'
})
export class ComIndexComponent {
  commissions: any[] = [];
  private http: ApiHttpClient;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private authService: AuthtokenService
  ) 
  {
    this.http = new ApiHttpClient(httpClient);
  }
  
  
  ngOnInit(): void {
    const token = this.authService.getToken();

    if(token)
    {
      this.http.get('commissions', token).subscribe(
        (data: any) => { 
          this.commissions = data;
          console.log(this.commissions);
        },
        error => {
          if (error.status === 403) {
            this.authService.logout()
            this.router.navigate([''])
          }
          console.error('Error fetching commissions:', error);
        }
      );
    }
    else
    {
      this.authService.logout()
      this.router.navigate([''])
    }

  }
}
