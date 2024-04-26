import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class NavigationService {

    constructor(
        private router: Router
    ) { }

    navigate(activatedRoute: ActivatedRoute, url: string) {
        this.router.navigate([url], { relativeTo: activatedRoute.parent?.parent });
    }
}