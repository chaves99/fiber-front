import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DailyComponent } from './daily/daily.component';
import { DailyDetailComponent } from './daily-detail/daily-detail.component';


@NgModule({
  declarations: [
    FeatureComponent,
    UserComponent,
    FoodComponent,
    LoginComponent,
    DailyComponent,
    DailyDetailComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    FormsModule,

    // MATERIAL DESIGN
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})
export class FeatureModule { }
