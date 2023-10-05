import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModel } from "../../models/user.model";
import { Injectable } from "@angular/core";

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
        return this.http.post<UserModel>('http://172.17.0.3:8989/user/login', { username: username, password: password });
    }

}