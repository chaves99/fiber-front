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
        weight: new FormControl(),
        weightUnit: new FormControl(),
        height: new FormControl(),
        heightUnit: new FormControl(),
        password: new FormControl(),
        confirmPassword: new FormControl()
    });

    @Output() submitEvent = new EventEmitter<UserModel>();

    onSubmit(): void {
        let formValue = this.userForm.value;
        if (formValue.confirmPassword === formValue.password) {
            this.submitEvent.emit({
                id: null, email: formValue.email,
                name: formValue.name, password: formValue.password,
                height: formValue.height, weight: formValue.weight,
                heightUnit: formValue.heightUnit, weightUnit: formValue.weightUnit
            });
        }
    }

}