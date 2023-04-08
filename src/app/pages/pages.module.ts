import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FoodModule } from '@shared/components/food/food.module';
import { UserModule } from '@shared/components/user/user.module';
import { SharedModule } from '../shared/shared.module';
import { FoodPageComponent } from './food/food-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { MainPageComponent } from './main/main-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UserPageComponent } from './user/user-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    FoodPageComponent,
    UserPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    FoodModule,
    UserModule,
    // Angular Material
  ]
})
export class PagesModule { }
