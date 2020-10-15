import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  token: string;

  constructor(private http: HttpClient, private router: Router) {
    this.loadStorage();
  }

  public loginUser(user: User): any {
    return this.http.post(`${environment.apiUrl}auth/user-login`, user, {
      headers: this.headers});
  }

  public register(user: User): any {
    return this.http.post(`${environment.apiUrl}auth/register`, user, {
      headers: this.headers});
  }

  public loadStorage(): any {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  public isLogin(): boolean {
    return this.token ? true : false;
  }

  public logout(): void {
    this.deleteStorage();
    this.router.navigate(['/login']);
  }

  public saveStorage(token: string, usuario: User): any {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(usuario));
    this.token = token;
  }

  public deleteStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
