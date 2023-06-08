import { Injectable } from "@angular/core";
import { LoginResponseModel } from '@core/models/login.model'
import { UserResponseModel } from "@core/models/user.model";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    getloggedUser(): LoginResponseModel | null {
        let token = localStorage.getItem('token');
        if (token !== null) {
            let model: LoginResponseModel = JSON.parse(token);
            return model;
        }
        return null;
    }

    addLoggedUser(user: UserResponseModel) {
        localStorage.setItem("token", JSON.stringify(user));
    }

}