import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthtokenService {

  private authTokenKey = 'auth_token';

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  login(token: string) {
    localStorage.setItem(this.authTokenKey, token);
  }

  logout() {
    localStorage.removeItem(this.authTokenKey);
  }

  // Optionally, you can have a method to retrieve the token if needed
  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
  
}