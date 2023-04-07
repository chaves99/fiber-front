import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserResponseModel } from "@core/models/user.model";
import { Observable } from "rxjs";
import { GenericService } from "./generic.service";

@Injectable({ providedIn: 'root' })
export class UserService extends GenericService {

    constructor(private http: HttpClient) {
        super();
        this.url = this.url + '/user';
     }

    getAll(): Observable<UserResponseModel[]> {
        return this.http.get<UserResponseModel[]>(this.url, { headers: this.headerAuth });
    }

}