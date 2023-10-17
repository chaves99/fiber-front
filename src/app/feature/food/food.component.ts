import { Component, OnInit } from "@angular/core";
import { FoodModel } from "@core/models/food.model";
import { FoodService } from "@core/services/http/food.service";

@Component({
    selector: 'fib-food',
    templateUrl: 'food.component.html'
})
export class FoodComponent implements OnInit {
    
    foodsModel: FoodModel[] = [];

    constructor(
        private foodService: FoodService
    ) {}

    ngOnInit(): void {
        this.foodService.getAll().subscribe(f => this.foodsModel = f);
    }

}