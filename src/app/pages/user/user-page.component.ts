import { Component, OnInit } from "@angular/core";
import { UserResponseModel } from "@core/models/user.model";
import { UserService } from "@core/service/user.service";

@Component({
    selector: 'fib-user-page',
    templateUrl: 'user-page.component.html'
})
export class UserPageComponent implements OnInit {

    userList: UserResponseModel[];

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService
            .getAll()
            .subscribe(userList => this.userList = userList);
    }

}