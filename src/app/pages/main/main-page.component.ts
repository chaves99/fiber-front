import { Component, OnInit } from "@angular/core";
import { UserService } from "@core/service/user.service";

@Component({
    selector: 'fib-main',
    templateUrl: 'main-page.component.html'
})
export class MainPageComponent implements OnInit {

    sidenavOpened: boolean = false;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
    }

    menuClick() {
        this.sidenavOpened = !this.sidenavOpened;
    }
}