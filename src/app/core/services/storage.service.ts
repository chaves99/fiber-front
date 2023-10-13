import { UserModel } from "../models/user.model";

export abstract class StorageService {

    abstract getUser(): UserModel | undefined;

    abstract setUser(user: UserModel): void;
}

export class StorageServiceImpl extends StorageService {

    private readonly USER_KEY: string = 'USER_KEY';

    override setUser(user: UserModel): void {
        let userJson: string = JSON.stringify(user);
        localStorage.setItem(this.USER_KEY, userJson);
    }

    override getUser(): UserModel | undefined {
        let user = localStorage.getItem(this.USER_KEY);
        if (user !== null) {
            return JSON.parse(user);
        }
        return undefined;
    }

}