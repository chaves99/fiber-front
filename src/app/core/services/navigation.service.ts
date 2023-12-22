import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuListEnum, getUrlByType } from "@core/models/menu-list.model";

@Injectable({providedIn: "root"})
export class NavigationService {

    constructor(
        private router: Router
    ) { }

    navigate(activatedRoute: ActivatedRoute, menuItem: MenuListEnum) {
        let url = getUrlByType(menuItem);
        if (url) {
            this.router.navigate([url], { relativeTo: activatedRoute.parent?.parent });
        }
    }
}