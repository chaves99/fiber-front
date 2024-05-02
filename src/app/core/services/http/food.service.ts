import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FoodModel } from "@core/models/food.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class FoodService {

    constructor(
        private http: HttpClient
    ) { }

    getById(id: number): Observable<FoodModel> {
        return this.http
            .get<FoodModel>(`${environment.apiUrl}/food/${id}`);
    }

    getAll(): Observable<FoodModel[]> {
        return this.http
            .get<FoodModel[]>(`${environment.apiUrl}/food`);
    }

    search(text: string): Observable<FoodModel[] | null> {
        return this.http
            .get<FoodModel[] | null>(`${environment.apiUrl}/food/search/${text}`);
    }

    create(model: FoodModel): Observable<FoodModel> {
        return this.http
            .post<FoodModel>(`${environment.apiUrl}/food`, model);
    }
}