import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { LocalStorageService } from "@core/service/local-storage.service";
import { LoginService } from "@core/service/login.service";

@Component({
    selector: 'fib-login',
    templateUrl: 'login-page.component.html',
    styleUrls: ['login-page.component.css']
})
export class LoginPageComponent {

    username = new FormControl('');

    password = new FormControl('');

    constructor(
        private loginService: LoginService,
        private router: Router,
        private localStorageService: LocalStorageService
    ) { }


    onSubmit(): void {
        if (this.username.value !== null && this.password.value !== null) {
            this.loginService
                .login({ username: this.username.value, password: this.password.value })
                .subscribe(res => {
                    this.localStorageService.addLoggedUser(res);
                    this.router.navigateByUrl('/');
                });
        }
    }

}