import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'https://localhost:7291/api/users/login';

  constructor(private http: HttpClient) { }

  loginUsuario(email: string, password: string) {
    return this.http.post(this.apiUrl, { email, password });
  }
}
