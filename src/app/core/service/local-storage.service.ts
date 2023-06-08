import { Injectable } from "@angular/core";
import { LoginResponseModel } from '@core/models/login.model'
import { UserResponseModel } from "@core/models/user.model";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    private readonly key: string = "token";

    getloggedUser(): LoginResponseModel | null {
        let token = localStorage.getItem(this.key);
        if (token !== null) {
            let model: LoginResponseModel = JSON.parse(token);
            return model;
        }
        return null;
    }

    addLoggedUser(user: UserResponseModel) {
        localStorage.setItem(this.key, JSON.stringify(user));
    }

    logOut(): void {
        localStorage.removeItem(this.key);
        localStorage.clear();
    }

}