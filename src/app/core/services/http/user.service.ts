import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FullUserModel, UpdateUserModel } from "@core/models/user.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    getById(id: number): Observable<FullUserModel> {
        return this.http
            .get<FullUserModel>(`${environment.apiUrl}/user/${id}`);
    }

    updateById(model: UpdateUserModel, id: number): Observable<FullUserModel> {
        return this.http
            .put<FullUserModel>(`${environment.apiUrl}/user/${id}`, model);
    }

    getAll(): Observable<FullUserModel[]> {
        return this.http
            .get<FullUserModel[]>(`${environment.apiUrl}/user`);
    }

    create(user: FullUserModel): Observable<FullUserModel> {
        return this.http
            .post<FullUserModel>(`${environment.apiUrl}/user`, user);
    }

}