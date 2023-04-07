import { NgModule } from "@angular/core";
import { FoodFormComponent } from "./food-form/food-form.component";
import { FoodListComponent } from "./food-list/food-list.component";

@NgModule({
    declarations:[
        FoodListComponent,
        FoodFormComponent
    ],
    exports:[
        FoodListComponent,
        FoodFormComponent
    ]
})
export class FoodModule {}