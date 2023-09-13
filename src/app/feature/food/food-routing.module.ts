import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodMainComponent } from './food-main/food-main.component';
import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'main',
        component: FoodMainComponent,
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: FoodListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
