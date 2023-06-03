import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FoodEntity } from "@core/models/food.model";

@Component({
    selector: 'fib-food-form',
    templateUrl: 'food-form.component.html',
    styleUrls: ['food-form.component.css']
})
export class FoodFormComponent {

    foodForm = new FormGroup({
        name: new FormControl(''),
        baseQuantity: new FormControl(0),
        carbohydrate: new FormControl(0),
        protein: new FormControl(0),
        fat: new FormControl(0),
        calories: new FormControl(0),
    });

    @Output() submitFood = new EventEmitter<FoodEntity>;

    onSubmit(): void {
        let values = this.foodForm.value;
        if (values.name !== null && values.name !== undefined
            && values.baseQuantity !== null && values.baseQuantity !== undefined
            && values.carbohydrate !== null && values.carbohydrate !== undefined
            && values.protein !== null && values.protein !== undefined
            && values.fat !== null && values.fat !== undefined
            && values.calories !== null && values.calories !== undefined) {

            let entity: FoodEntity = {
                name: values.name,
                baseQuantity: values.baseQuantity,
                carbohydrate: values.carbohydrate,
                protein: values.protein,
                fat: values.fat,
                calories: values.calories,
            };
            this.submitFood.emit(entity);
        }
    }

}