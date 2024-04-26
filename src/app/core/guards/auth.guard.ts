import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { StorageService } from "../services/storage.service";

@Injectable({ providedIn: 'root' })
class AuthGuardService {

    constructor(
        private storageService: StorageService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        let user = this.storageService.getUser();
        if (user !== undefined) {
            return true;
        }
        return this.router.createUrlTree(['feature', 'login']);
    }
}

export const canActivateAuth: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthGuardService).canActivate(route, state);
}