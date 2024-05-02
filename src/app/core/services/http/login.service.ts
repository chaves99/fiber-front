import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UserModel } from "../../models/user.model";

export abstract class LoginService {

    abstract login(username: string, password: string): Observable<UserModel>;
}

@Injectable({ providedIn: 'root' })
export class LoginServiceImpl extends LoginService {

    constructor(
        private http: HttpClient
    ) {
        super()
    }

    override login(username: string, password: string): Observable<UserModel> {
        return this.http.post<UserModel>(`${environment.apiUrl}/user/login`, { username: username, password: password });
    }

}