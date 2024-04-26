import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '@core/services/http/login.service';
import { StorageService } from '@core/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = "";
  password = "";

  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  login() {
    this.loginService.login(this.username, this.password).subscribe(user => {
      this.storageService.setUser(user);
      this.router.navigate(['user'], { relativeTo: this.activatedRoute.parent?.parent }); // this works!
    });
  }

}
