import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoodModel } from '@core/models/food.model';
import { MenuListEnum } from '@core/models/menu-list.model';
import { FoodService } from '@core/services/http/food.service';
import { NavigationService } from '@core/services/navigation.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent {

  foodFormGroup = new FormGroup({
    foodName: new FormControl(),
    quantityBase: new FormControl(),
    carbs: new FormControl(),
    fiber: new FormControl(),
    protein: new FormControl(),
    calories: new FormControl(),
    fat: new FormControl(),
  });

  constructor(
    private foodService: FoodService,
    private navigationService: NavigationService,
    private activatedRoute: ActivatedRoute
  ) { }

  submit() {
    const values = this.foodFormGroup.value;
    if (values.foodName && values.calories
      && values.carbs && values.fat && values.protein) {
      let foodModel: FoodModel = {
        name: values.foodName,
        baseQuantity: values.quantityBase,
        calories: values.calories,
        carbohydrate: values.carbs,
        protein: values.protein,
        fat: values.fat,
        fiber: values.fiber
      };
      this.foodService.create(foodModel)
        .subscribe(fm => this.navigationService.navigate(this.activatedRoute, MenuListEnum.FOOD));
    }
  }

  goBack() {
    this.navigationService.navigate(this.activatedRoute, MenuListEnum.FOOD);
  }

}
