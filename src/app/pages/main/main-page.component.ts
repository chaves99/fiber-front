import { Component, effect, OnInit } from "@angular/core";
import { LoginResponseModel } from "@core/models/login.model";
import { LocalStorageService } from "@core/service/local-storage.service";
import { UserService } from "@core/service/user.service";

@Component({
    selector: 'fib-main',
    templateUrl: 'main-page.component.html'
})
export class MainPageComponent implements OnInit {

    sidenavOpened: boolean = false;

    user: LoginResponseModel | null = null;

    constructor(
        private userService: UserService,
        private localStorageService: LocalStorageService
    ) {
        localStorageService.init();
        effect(() => {
            this.user = localStorageService.item();
        });
    }

    ngOnInit(): void {
    }

    menuClick() {
        this.sidenavOpened = !this.sidenavOpened;
    }
}