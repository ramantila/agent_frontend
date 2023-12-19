import { Component } from '@angular/core';
import { AuthtokenService } from './authtoken.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agent-backend';
  
  constructor(private authService: AuthtokenService) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
