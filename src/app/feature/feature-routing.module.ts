import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivateAuth } from '../core/guards/auth.guard';
import { AddMealComponent } from './add-meal/add-meal.component';
import { DailyDetailComponent } from './daily-detail/daily-detail.component';
import { DailyComponent } from './daily/daily.component';
import { FeatureComponent } from './feature.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { ReportMealComponent } from './report-meal/report-meal.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: 'food',
        component: FoodComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'daily',
        component: DailyComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: "daily/detail/:seasonId",
        component: DailyDetailComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: 'add-meal',
        component: AddMealComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: 'register-food',
        component: FoodFormComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'meal-detail/:mealId',
        component: MealDetailComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: 'meal-report',
        component: ReportMealComponent,
        canActivate: [canActivateAuth]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
