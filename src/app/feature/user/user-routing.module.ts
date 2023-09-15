import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserMainComponent } from "./components/user-main/user-main.component";

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'main',
                component: UserMainComponent
            },
            {
                path: 'list',
                component: UserListComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRountingModule { }