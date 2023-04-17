import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginRequestModel } from "@core/models/login.model";
import { LoginService } from "@core/service/login.service";
import { Observable } from "rxjs";

@Component({
    selector: 'fib-login',
    templateUrl: 'login-page.component.html',
    styleUrls:['login-page.component.css']
})
export class LoginPageComponent {

    loginModel: LoginRequestModel = { username: '', password: '' };

    loginModelObservable$: Observable<LoginRequestModel>;

    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }


    onSubmit(): void {
        this.loginService.login(this.loginModel).subscribe(res => {
            localStorage.setItem('token', JSON.stringify(res));
            this.router.navigateByUrl('/');
        });
    }

}