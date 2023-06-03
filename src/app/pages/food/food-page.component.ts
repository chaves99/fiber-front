import { Component, OnInit } from "@angular/core";
import { FoodEntity } from "@core/models/food.model";
import { FoodService } from "@core/service/food.service";

@Component({
    templateUrl: 'food-page.component.html',
    styleUrls: ['food-page.component.css']
})
export class FoodPageComponent implements OnInit {

    registering: boolean = false;

    foodEntities: FoodEntity[] = [];

    constructor(
        private foodService: FoodService
    ) { }

    ngOnInit(): void {
        this.foodService
            .getAllFood()
            .subscribe(foods => this.foodEntities = foods);
    }

    add(): void {
        this.registering = true;
    }

    registerFormSubmit(foodEntity: FoodEntity): void {
        this.foodService.create(foodEntity).subscribe(fe => {
            this.foodEntities.push(fe);
            this.registering = false;
        });
    }
}