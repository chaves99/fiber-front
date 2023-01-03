import { Component } from "@angular/core";
import { LoginModel } from "@core/models/login.model";
import { login } from "@core/state/actions/login.actions";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
    selector: 'fib-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    loginModel: LoginModel = { username: '', password: '' };

    loginModelObservable$: Observable<LoginModel>;

    constructor(private store: Store) {
    }


    onSubmit(): void {
        this.store.dispatch(login({ loginModel: { username: this.loginModel.username, password: this.loginModel.password } }));
    }

}