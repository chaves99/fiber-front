import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FoodModule } from './components/food/food.module';
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
    UserModule
  ]
})
export class SharedModule { }
