import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthtokenService } from '../../authtoken.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authService: AuthtokenService, private router: Router){}

  logoutFun(): void{
    this.authService.logout();
    this.router.navigate(['']);
  }

}
