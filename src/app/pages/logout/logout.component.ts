import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "@core/service/local-storage.service";

@Component({
    template: ''
})
export class LogoutComponent implements OnInit {

    constructor(
        private router: Router,
        private localStorageService: LocalStorageService
    ) { }

    ngOnInit(): void {
        this.localStorageService.logout();
        this.router.navigateByUrl('/');
    }


}