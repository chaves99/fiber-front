import { LoginModel } from "@core/models/login.model";
import { createReducer, on } from "@ngrx/store";
import { login } from "../actions/login.actions";

export const initialState: LoginModel = { username: '', password: '' };

export const loginReducer = createReducer(
    initialState,
    on(login, (state, { loginModel }) => ({...state, loginModel}))
);