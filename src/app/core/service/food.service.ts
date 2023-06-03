import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FoodEntity } from "@core/models/food.model";
import { Observable } from "rxjs";
import { GenericService } from "./generic.service";

@Injectable({ providedIn: 'root' })
export class FoodService extends GenericService {

    constructor(private http: HttpClient) {
        super();
        this.url = this.url + '/food';
    }

    getAllFood(): Observable<FoodEntity[]> {
        return this.http.get<FoodEntity[]>(this.url, { headers: this.headerAuth });
    }

    create(entity: FoodEntity): Observable<FoodEntity> {
        return this.http.post<FoodEntity>(this.url, entity, { headers: this.headerAuth });
    }

}