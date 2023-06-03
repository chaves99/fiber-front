import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { FoodFormComponent } from "./food-form/food-form.component";
import { FoodListComponent } from "./food-list/food-list.component";

@NgModule({
    declarations: [
        FoodListComponent,
        FoodFormComponent
    ],
    exports: [
        FoodListComponent,
        FoodFormComponent
    ],
    imports: [
        CommonModule,
        MatListModule
    ]
})
export class FoodModule { }