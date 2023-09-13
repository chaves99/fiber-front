import { Component } from "@angular/core";

@Component({
    selector: 'fib-food',
    template: 
        `
            <b>Food Works!</b>
            <div style='border: 1'>
                <router-outlet></router-outlet>
            </div>
        `
})
export class FoodComponent {

}