import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL } from "@core/constants/backend";
import { MealModel } from "@core/models/meal.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class MealService {

    constructor(
        private http: HttpClient
    ) { }

    create(model: MealModel): Observable<MealModel> {
        return this.http
            .post<MealModel>(`${URL}/meals`, model);
    }

    getBySeasonId(seasonId: number): Observable<MealModel[]> {
        return this.http
            .get<MealModel[]>(`${URL}/meals/season/${seasonId}`);
    }
}