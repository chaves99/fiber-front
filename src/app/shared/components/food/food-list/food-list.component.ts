import { Component, Input } from "@angular/core";
import { UserModel, UserResponseModel } from "@core/models/user.model";

@Component({
    selector: 'fib-food-list',
    templateUrl: 'food-list.component.html'
})
export class FoodListComponent {

    @Input() userList: UserResponseModel[];

}