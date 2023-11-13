import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL } from "@core/constants/backend";
import { SeasonCreateModel, SeasonModel } from "@core/models/season.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SeasonService {

    constructor(
        private http: HttpClient
    ) { }

    getByIdUser(idUser: number): Observable<SeasonModel[]> {
        return this.http
            .get<SeasonModel[]>(`${URL}/season/user/${idUser}`);
    }

    getActiveByIdUser(idUser: number): Observable<SeasonModel> {
        return this.http
            .get<SeasonModel>(`${URL}/season/active/${idUser}`);
    }

    create(model: SeasonCreateModel): Observable<SeasonModel> {
        return this.http
            .post<SeasonModel>(`${URL}/season`, model);
    }

    updateFinalDate(dateText: string, seasonId: number): Observable<SeasonModel> {
        return this.http
            .put<SeasonModel>(`${URL}/season/final-date/${seasonId}`, dateText);
    }

    getSeasonById(id: number): Observable<SeasonModel> {
        return this.http
            .get<SeasonModel>(`${URL}/season/${id}`);
    }

}