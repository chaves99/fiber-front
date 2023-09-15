import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodMainComponent } from './components/food-main/food-main.component';
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
