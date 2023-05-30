export interface LoginRequestModel {
    username: string;
    password: string;
}

export interface LoginResponseModel {
    email: string;
    id: number;
    name: string;
    token: string;
}