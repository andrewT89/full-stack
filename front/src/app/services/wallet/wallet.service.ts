import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class WalletService {
  URL: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  public create(wallet: any): any {
    return this.http.post(`${this.URL}wallet/post`, wallet);
  }

  public getWallets(): any {
    return this.http.get(`${this.URL}wallet/allWallets`);
  }

  public edit(wallet: any, idWallet: string): any {
    return this.http.post(`${this.URL}wallet/${idWallet}`, wallet);
  }

  public delete(idWallet: string): void {
    this.http.delete(`${this.URL}wallet/${idWallet}`);
  }
}
