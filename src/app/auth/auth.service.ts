import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  usernameAvailable(username: string) {
    return this.http
    .post<UsernameAvailableResponse>('https://api.angular-email.com/auth/username', {
      username
    });
  }
  
  signUp(credentials: any) {
    return this.http
    .post<any>('https://api.angular-email.com/auth/signup',{
      credentials
    });
  }

  signIn(username: string, password: string) {
    return this.http
    .post<any>('https://api.angular-email.com/signin', {
      username,
      password
    });
  }
  
  signOut() {
    return this.http.post<any>('https://api.angular-email.com/auth/signout', {});
  }
}
