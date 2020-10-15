import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  user: User;
  openCart = false;

  constructor(public router: Router, private userServ: UserService) {}

  public cartOpen(): void {
    this.openCart = !this.openCart;
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  public logout(): void {
    this.userServ.logout();
  }
}
