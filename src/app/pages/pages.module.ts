import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
    // Material Design
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class PagesModule { }
