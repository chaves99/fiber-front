import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginRequestModel } from "@core/models/login.model";
import { LoginService } from "@core/service/login.service";
import { Observable } from "rxjs";

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
        private router: Router
    ) { }


    onSubmit(): void {
        console.log(this.username);
        if (this.username.value !== null && this.password.value !== null) {
            this.loginService
                .login({ username: this.username.value, password: this.password.value })
                .subscribe(res => {
                    localStorage.setItem('token', JSON.stringify(res));
                    this.router.navigateByUrl('/');
                });
        }
    }

}