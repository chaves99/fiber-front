export interface UserModel extends UserResponseModel {
    password: string;
}

export interface UserResponseModel {
    id: number | null;
    name: string;
    email: string;
    weight?: number | null;
    height?: number | null;
    weightUnit?: string | null;
    heightUnit?: string | null;
}