import { CanActivateFn } from "@angular/router";

export const canActivateAuth: CanActivateFn = (route, state) => {
    return false;
}