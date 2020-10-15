import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services';
import { Router } from '@angular/router';
import { User } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public router: Router,
    private userServ: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [ Validators.required ])
    });
  }

  public singIn(): void {

    if (this.loginForm.valid) {
      this.userServ
      .loginUser(this.loginForm.value)
      .subscribe((resp: any) => {
        if (resp) {
          const userStorage = new User();
          userStorage._id = resp.user._id;
          userStorage.userName = resp.user.userName;
          userStorage.email = resp.user.email;
          userStorage.userId = resp.user.userId;
          userStorage.firstName = resp.user.firstName;
          userStorage.lastName = resp.user.lastName;
          userStorage.phoneNumber = resp.user.phoneNumber;
          userStorage.identification = resp.user.identification;
          this.userServ.saveStorage(resp.token, userStorage);
          this.router.navigate(['/home']);
        }
      });
    }
  }

}
