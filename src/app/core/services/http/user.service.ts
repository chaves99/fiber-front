import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL } from "@core/constants/backend";
import { FullUserModel, UpdateUserModel } from "@core/models/user.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    getById(id: number): Observable<FullUserModel> {
        return this.http
            .get<FullUserModel>(`${URL}/user/${id}`);
    }

    updateById(model: UpdateUserModel, id: number): Observable<FullUserModel> {
        return this.http
            .put<FullUserModel>(`${URL}/user/${id}`, model);
    }

    getAll(): Observable<FullUserModel[]> {
        return this.http
            .get<FullUserModel[]>(`${URL}/user`);
    }

    create(user: FullUserModel): Observable<FullUserModel> {
        return this.http
            .post<FullUserModel>(`${URL}/user`, user);
    }

}