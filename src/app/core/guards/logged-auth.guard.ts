import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { LocalStorageService } from "@core/service/local-storage.service";

const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(LoggedAuthGuard).canActivate();
};

@Injectable({ providedIn: 'root' })
export class LoggedAuthGuard {

    constructor(private localStorageService: LocalStorageService) { }

    canActivate(): boolean {
        let user = this.localStorageService.getloggedUser();
        if (user !== null) {
            return true;
        }
        return false;
    }

}