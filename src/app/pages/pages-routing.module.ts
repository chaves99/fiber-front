import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPageComponent } from './food/food-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main/main-page.component';
import { UserPageComponent } from './user/user-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'food', component: FoodPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }