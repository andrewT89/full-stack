import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(
    private userServ: UserService
  ) { }

  ngOnInit(): void {
    if (this.userServ.isLogin()) {
      if (localStorage.getItem('user')) {
        this.user = JSON.parse(localStorage.getItem('user'));
      }
    }
  }

}
