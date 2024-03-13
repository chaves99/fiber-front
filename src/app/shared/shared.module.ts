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


@NgModule({
  declarations: [
    MenubarComponent,
    SidenavComponent,
    EachMealCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // ANgular Material API
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MenubarComponent,
    SidenavComponent,
    EachMealCardComponent
  ]
})
export class SharedModule { }
