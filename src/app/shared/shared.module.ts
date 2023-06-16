import { NgModule } from '@angular/core';
import { FoodModule } from './components/food/food.module';
import { MealModule } from './components/meal/meal.module';
import { UserModule } from './components/user/user.module';

/**
 * The SharedModule should not be providing any services.
 * Just declare components, pipes, directives
 */

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    FoodModule,
    UserModule,
    MealModule
  ],
  exports: [
    FoodModule,
    UserModule,
    MealModule
  ]
})
export class SharedModule { }
