import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModel } from "../../models/user.model";
import { Injectable } from "@angular/core";
import { URL } from "@core/constants/backend";

export abstract class LoginService {

    abstract login(username: string, password: string): Observable<UserModel>;
}

@Injectable({providedIn: 'root'})
export class LoginServiceImpl extends LoginService {

    constructor(
        private http: HttpClient
    ) {
        super()
    }

    override login(username: string, password: string): Observable<UserModel> {
        return this.http.post<UserModel>(`${URL}/user/login`, { username: username, password: password });
    }

}