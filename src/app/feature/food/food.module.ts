import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodMainComponent } from './food-main/food-main.component';
import { FoodComponent } from './food.component';


@NgModule({
  declarations: [
    FoodListComponent,
    FoodMainComponent,
    FoodComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
