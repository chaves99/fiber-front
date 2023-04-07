export interface UserModel extends UserResponseModel {
    password: string;
}

export interface UserResponseModel {
    id: number;
    name: string;
    email: string;
    goalCalories: number;
    goalCarbohydrate: number;
    goalProtein: number;
}