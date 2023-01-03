import { Component, OnInit } from "@angular/core";
import { UserModel } from "@core/models/user.model";



@Component({
    selector: 'fib-main',
    templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit {

    user: UserModel = {
        id: 1232,
        name: "lsakjdhfnljk",
        email: "",
        password: ""
    }

    ngOnInit(): void {

    }
}