import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { AddMealComponent } from './add-meal/add-meal.component';
import { DailyDetailComponent } from './daily-detail/daily-detail.component';
import { DailyComponent } from './daily/daily.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    FeatureComponent,
    UserComponent,
    FoodComponent,
    LoginComponent,
    DailyComponent,
    DailyDetailComponent,
    AddMealComponent,
    LogoutComponent,
    FoodFormComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    // MATERIAL DESIGN
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatGridListModule
  ]
})
export class FeatureModule { }
