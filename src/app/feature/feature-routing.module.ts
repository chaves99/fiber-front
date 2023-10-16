import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateAuth } from '../core/guards/auth.guard';
import { FeatureComponent } from './feature.component';
import { UserComponent } from './user/user.component';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
