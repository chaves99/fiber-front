import { Component, Input } from '@angular/core';
import { FoodModel } from '@core/models/food.model';

@Component({
  selector: 'fib-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  @Input() foods: FoodModel[] = [];

}
