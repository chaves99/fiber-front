import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EachMealCardComponent } from './each-meal-card/each-meal-card.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FoodTableComponent } from './food-table/food-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    MenubarComponent,
    SidenavComponent,
    EachMealCardComponent,
    FoodTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Angular Material API
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    MenubarComponent,
    SidenavComponent,
    EachMealCardComponent,
    FoodTableComponent
  ]
})
export class SharedModule { }
