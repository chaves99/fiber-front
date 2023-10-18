import { Component, OnInit } from "@angular/core";
import { FullUserModel } from "@core/models/user.model";
import { UserService } from "@core/services/http/user.service";
import { StorageService } from "@core/services/storage.service";

@Component({
    selector: 'fib-user',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

    user?: FullUserModel;

    constructor(
        private userService: UserService,
        private storageService: StorageService
    ){}

    ngOnInit(): void {
        let user = this.storageService.getUser();
        if (user && user.id) 
            this.userService.getById(user.id).subscribe(u => {
                this.user = u;
            });
    }

}