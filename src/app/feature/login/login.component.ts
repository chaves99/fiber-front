import { Component } from '@angular/core';
import { LoginService } from '@core/services/http/login.service';
import { StorageService } from '@core/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = "";
  password = "";

  constructor(
    private loginService: LoginService,
    private storageService: StorageService
  ) {}

  login() {
    console.log(`${this.loginService}`);
    this.loginService.login(this.username, this.password).subscribe(user => {
      console.log(user);
    });
  }

}
