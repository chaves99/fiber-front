import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListEnum, getUrlByType } from '@core/models/menu-list.model';
import { canActivateAuth } from '../core/guards/auth.guard';
import { DailyComponent } from './daily/daily.component';
import { FeatureComponent } from './feature.component';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DailyDetailComponent } from './daily-detail/daily-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: getUrlByType(MenuListEnum.USER),
        component: UserComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: getUrlByType(MenuListEnum.FOOD),
        component: FoodComponent,
        canActivate: [canActivateAuth]
      },
      {
        path: getUrlByType(MenuListEnum.LOGIN),
        component: LoginComponent
      },
      {
        path: getUrlByType(MenuListEnum.DAILY),
        component: DailyComponent
      },
      {
        path: getUrlByType(MenuListEnum.DAILY) + "/detail/:seasonId",
        component: DailyDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
