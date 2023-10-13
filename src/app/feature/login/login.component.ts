import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuListEnum, getMenuByType } from '@core/models/menu-list.model';
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
    console.log(this.activatedRoute);
    this.loginService.login(this.username, this.password).subscribe(user => {
      this.storageService.setUser(user);
      let menu = getMenuByType(MenuListEnum.USER)
      this.router.navigate([menu?.url], { relativeTo: this.activatedRoute.parent?.parent }); // this works!
    });
  }

}
