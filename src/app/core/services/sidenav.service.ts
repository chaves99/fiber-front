import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SidenavService {

    private subject = new BehaviorSubject<boolean>(false);

    public toggle() {
        this.subject.next(true);
    }

    public getSubject() {
        return this.subject;
    }

}