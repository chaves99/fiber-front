import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
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
        ReactiveFormsModule,
        // Angular Material
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class FoodModule { }