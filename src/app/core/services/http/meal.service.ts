import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MealModel } from "@core/models/meal.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({ providedIn: "root" })
export class MealService {

    constructor(
        private http: HttpClient
    ) { }

    create(model: MealModel): Observable<MealModel> {
        return this.http
            .post<MealModel>(`${environment.apiUrl}/meals/create`, model);
    }

    getBySeasonId(seasonId: number): Observable<MealModel[]> {
        return this.http
            .get<MealModel[]>(`${environment.apiUrl}/meals/season/${seasonId}`);
    }

    getByMealId(id: number): Observable<MealModel> {
        return this.http.get<MealModel>(`${environment.apiUrl}/meals/${id}`);
    }
}