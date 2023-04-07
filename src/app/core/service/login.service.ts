import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequestModel, LoginResponseModel } from "@core/models/login.model";
import { Observable } from "rxjs";
import { GenericService } from "./generic.service";

@Injectable({ providedIn: 'root' })
export class LoginService extends GenericService{

    constructor(private http: HttpClient) {
        super();
    }

    login(req: LoginRequestModel): Observable<LoginResponseModel> {
        return this.http.post<LoginResponseModel>(`${this.url}/user/login`, req, { headers: this.header });
    }

}