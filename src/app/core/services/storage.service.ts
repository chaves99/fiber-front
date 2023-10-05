import { UserModel } from "../models/user.model";

export abstract class StorageService {

    abstract getUser(): UserModel | undefined;

    abstract setUser(user: UserModel): void;
}

export class StorageServiceImpl extends StorageService {

    override setUser(user: UserModel): void {
        throw new Error("Method not implemented.");
    }

    override getUser(): UserModel | undefined {
        return undefined;
    }

}