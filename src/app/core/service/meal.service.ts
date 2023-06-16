import { Injectable } from "@angular/core";
import { GenericService } from "./generic.service";

@Injectable({ providedIn: 'root' })
export class MealService extends GenericService {

    constructor() {
        super();
        super.url = super.url + '/meals'
    }

}