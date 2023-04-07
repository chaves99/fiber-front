import { Component, Input } from "@angular/core";
import { UserResponseModel } from "@core/models/user.model";

@Component({
    selector: 'fib-user-list',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent {

    @Input() userList: UserResponseModel[];
}