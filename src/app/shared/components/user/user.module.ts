import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UserListComponent } from "./user-list/user-list.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

@NgModule({
    declarations:[
        UserRegisterComponent,
        UserListComponent
    ],
    exports:[
        UserRegisterComponent,
        UserListComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UserModule {

}