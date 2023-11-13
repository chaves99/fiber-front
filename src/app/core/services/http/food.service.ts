import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL } from "@core/constants/backend";
import { FoodModel } from "@core/models/food.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FoodService {

    constructor(
        private http: HttpClient
    ) { }

    getById(id: number): Observable<FoodModel> {
        return this.http
            .get<FoodModel>(`${URL}/food/${id}`);
    }

    getAll(): Observable<FoodModel[]> {
        return this.http
            .get<FoodModel[]>(`${URL}/food`);
    }

    search(text: string): Observable<FoodModel[] | null> {
        return this.http
            .get<FoodModel[] | null>(`${URL}/food/search/${text}`);
    }

    create(model: FoodModel): Observable<FoodModel> {
        return this.http
            .post<FoodModel>(`${URL}/food`, model);
    }
}