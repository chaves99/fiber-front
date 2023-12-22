import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodModel } from '@core/models/food.model';
import { MenuListEnum, getUrlByType } from '@core/models/menu-list.model';
import { FoodService } from '@core/services/http/food.service';
import { NavigationService } from '@core/services/navigation.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {
  
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
  ){}

  ngOnInit(): void {
    
  }

  submit() {
    let foodModel: FoodModel = {
      name: this.foodFormGroup.value.foodName,
      baseQuantity: this.foodFormGroup.value.quantityBase,
      calories: this.foodFormGroup.value.calories,
      carbohydrate: this.foodFormGroup.value.carbs,
      fat: this.foodFormGroup.value.fat,
      fiber: this.foodFormGroup.value.fiber
    };
    this.foodService.create(foodModel).subscribe(fm => this.navigationService.navigate(this.activatedRoute, MenuListEnum.FOOD));
  }

  goBack() {
    this.navigationService.navigate(this.activatedRoute, MenuListEnum.FOOD);
  }

}
