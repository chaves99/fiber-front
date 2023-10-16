export interface UserModel {
    id?: string;
    username?: string;
    password?: string;
    token?: string;
    email?: string;
}

export interface FullUserModel extends UserModel {
    weight?: number | null;
    height?: number | null;
    weightUnit?: string | null;
    heightUnit?: string | null;
}

export interface UpdateUserModel {
    name?: string,
    email?: string,
    weight?: 0,
    height?: 0,
    weightUnit?: string,
    heightUnit?: string
}