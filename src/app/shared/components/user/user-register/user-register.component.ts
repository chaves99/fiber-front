import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { UserModel } from "@core/models/user.model";

@Component({
    selector: 'fib-user-register',
    templateUrl: './user-register.component.html'
})
export class UserRegisterComponent {

    userForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        goalCalories: new FormControl(),
        goalCarbohydrate: new FormControl(),
        goalProtein: new FormControl(),
        password: new FormControl(),
        confirmPassword: new FormControl()
    });

    @Output() submitEvent = new EventEmitter<UserModel>();

    onSubmit(): void {
        console.log(this.userForm.value);
    }

}