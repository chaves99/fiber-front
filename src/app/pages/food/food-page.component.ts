import { Component, OnInit } from "@angular/core";
import { FoodEntity } from "@core/models/food.model";
import { FoodService } from "@core/service/food.service";

@Component({
    templateUrl: 'food-page.component.html',
    styleUrls: ['food-page.component.css']
})
export class FoodPageComponent implements OnInit {

    registering: boolean = false;

    foodEntities: FoodEntity[] = [
        {
            id: 1,
            name: 'test',
            baseQuantity: 100,
            calories: 100,
            carbohydrate: 20,
            fat: 5,
            protein: 50
        },
        {
            id: 2,
            name: 'test - 2',
            baseQuantity: 100,
            calories: 100,
            carbohydrate: 20,
            fat: 5,
            protein: 50
        },
    ];

    constructor(
        private foodService: FoodService
    ) { }

    ngOnInit(): void {
        // this.foodService
        //     .getAllFood()
        //     .subscribe(foods => this.foodEntities = foods);
        console.log(this.foodEntities);
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