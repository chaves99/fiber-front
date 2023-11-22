import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import { BehaviorSubject } from "rxjs";

export type LOG_IN_OUT_STATE = 'LOGOUT' | 'LOGIN';

@Injectable({providedIn: "root"})
export abstract class StorageService {

    abstract getUser(): UserModel | undefined;

    abstract setUser(user: UserModel): void;

    abstract clearUser(): void;

    abstract getSubject(): BehaviorSubject<LOG_IN_OUT_STATE>;
}

@Injectable({providedIn: "root"})
export class StorageServiceImpl extends StorageService {
    
    private readonly USER_KEY: string = 'USER_KEY';

    private subject = new BehaviorSubject<LOG_IN_OUT_STATE>("LOGOUT");

    constructor() {
        super();
        if (this.getUser() === undefined) {
            this.subject.next('LOGOUT');
        } else {
            this.subject.next('LOGIN');
        }
    }

    override setUser(user: UserModel): void {
        let userJson: string = JSON.stringify(user);
        localStorage.setItem(this.USER_KEY, userJson);
        this.subject.next("LOGIN");
    }

    override getUser(): UserModel | undefined {
        let user = localStorage.getItem(this.USER_KEY);
        if (user !== null) {
            return JSON.parse(user);
        }
        return undefined;
    }

    override clearUser(): void {
        localStorage.clear();
        this.subject.next('LOGOUT');
    }

    override getSubject(): BehaviorSubject<LOG_IN_OUT_STATE> {
        return this.subject;
    }

}