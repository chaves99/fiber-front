import { Component, Input } from "@angular/core";
import { FoodEntity } from "@core/models/food.model";

@Component({
    selector: 'fib-food-list',
    templateUrl: 'food-list.component.html'
})
export class FoodListComponent {

    @Input() foodList: FoodEntity[];

}