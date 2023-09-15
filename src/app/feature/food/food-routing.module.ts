import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodMainComponent } from './components/food-main/food-main.component';
import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent,
    children: [
      {
        path: 'main',
        component: FoodMainComponent,
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
