import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string = "localhost.example";

  constructor(private http: HttpClient) { }

  signUp(user: User) {
    return this.http.post(`${this.URL}/register`, user);
  }

  signIn(username: string, password: string) {
    let query = new HttpParams();
    query = query.append('username', username);
    query = query.append('password', password);

    return this.http.get(`${this.URL}/login`, { params: query, responseType: 'text'})
    .pipe(tap((response: any) => {
      localStorage.setItem('tokenName', response);
    }))
  }
}