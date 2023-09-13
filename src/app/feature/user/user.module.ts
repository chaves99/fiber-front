import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRountingModule } from './user-routing.module';
import { UserMainComponent } from './user-main/user-main.component';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserMainComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRountingModule,
  ]
})
export class UserModule { }
