import { Component } from "@angular/core";

@Component({
    selector: 'fib-feature',
    template: 
        `
            <b>Feature Works!</b>
            <router-outlet></router-outlet>
        `
})
export class FeatureComponent {}