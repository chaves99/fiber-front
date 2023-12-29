import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenubarComponent } from './menubar/menubar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';


@NgModule({
  declarations: [
    MenubarComponent,
    SidenavComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // ANgular Material API
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MenubarComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
