import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { MenuListEnum, MenuListModel } from "../models/menu-list.model";
import { StorageService } from "../services/storage.service";

@Injectable({ providedIn: 'root' })
class AuthGuardService {

    constructor(
        private storageService: StorageService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (this.storageService.getUser() !== undefined) {
            console.log("not undefined");
            return true;
        }

        let url = MenuListModel.getByType(MenuListEnum.LOGIN);
        if (url !== undefined) {
            return this.router.createUrlTree([route.firstChild?.url, url.url]);
        }
        return false;
    }
}

export const canActivateAuth: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthGuardService).canActivate(route, state);
}