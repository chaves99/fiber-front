import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SeasonCreateModel, SeasonModel } from "@core/models/season.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class SeasonService {

    constructor(
        private http: HttpClient
    ) { }

    getByIdUser(idUser: number): Observable<SeasonModel[]> {
        return this.http
            .get<SeasonModel[]>(`${environment.apiUrl}/season/user/${idUser}`);
    }

    getActiveByIdUser(idUser: number): Observable<SeasonModel> {
        return this.http
            .get<SeasonModel>(`${environment.apiUrl}/season/active/${idUser}`);
    }

    create(model: SeasonCreateModel): Observable<SeasonModel> {
        return this.http
            .post<SeasonModel>(`${environment.apiUrl}/season`, model);
    }

    updateFinalDate(dateText: string, seasonId: number): Observable<SeasonModel> {
        return this.http
            .put<SeasonModel>(`${environment.apiUrl}/season/final-date/${seasonId}`, dateText);
    }

    getSeasonById(id: number): Observable<SeasonModel> {
        return this.http
            .get<SeasonModel>(`${environment.apiUrl}/season/${id}`);
    }

}