import { LoginModel } from "@core/models/login.model";
import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Login Page] Login', 
    props<{loginModel: LoginModel}>()
);

export const logoff = createAction(
    '[Login Page] Logoff'
);