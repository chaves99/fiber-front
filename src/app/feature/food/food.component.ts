import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FoodModel } from "@core/models/food.model";
import { MenuListEnum, getUrlByType } from "@core/models/menu-list.model";
import { FoodService } from "@core/services/http/food.service";

@Component({
    selector: 'fib-food',
    templateUrl: 'food.component.html',
    styleUrls: ['food.component.scss']
})
export class FoodComponent implements OnInit {
    
    foodsModel: FoodModel[] = [];

    constructor(
        private foodService: FoodService,
        private route: Router
    ) {}

    ngOnInit(): void {
        this.foodService.getAll().subscribe(f => this.foodsModel = f);
        if(this.foodsModel.length > 0) {
            console.log(this.foodsModel);
        }
    }

    edit(food: FoodModel) {
        if(this.foodsModel) {
            console.log(food);
        }
    }

    openForm(): void {
        let url = getUrlByType(MenuListEnum.REGISTER_FOOD);
        if (url) {
            this.route.navigateByUrl(`feature/${url}`);
        }
    }

}