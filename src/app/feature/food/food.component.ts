import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodModel } from "@core/models/food.model";
import { FoodService } from "@core/services/http/food.service";
import { NavigationService } from "@core/services/navigation.service";

@Component({
    selector: 'fib-food',
    templateUrl: 'food.component.html',
    styleUrls: ['food.component.scss']
})
export class FoodComponent implements OnInit {
    
    foodsModel: FoodModel[] = [];

    constructor(
        private foodService: FoodService,
        private navigationService: NavigationService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.foodService.getAll().subscribe(f => this.foodsModel = f);
    }

    edit(food: FoodModel) {
        
    }

    openForm(): void {
        this.navigationService.navigate(this.activatedRoute, 'register-food');
    }

}