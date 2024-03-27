import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
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
import { MealDetailComponent } from './meal-detail/meal-detail.component';
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
    FoodFormComponent,
    MealDetailComponent
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
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
  ]
})
export class FeatureModule { }
