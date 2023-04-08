import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginResponseModel } from "@core/models/login.model";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    private readonly HEADER_AUTH_KEY: string = 'Authorization';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        let authParam = req.headers.get(this.HEADER_AUTH_KEY);

        if (token != null && authParam != null) {
            let model = JSON.parse(token) as LoginResponseModel;
            let newReq = req.clone({
                headers: req.headers.set('Authorization', `bearer ${model.token}`)
            });
            return next.handle(newReq);
        }
        return next.handle(req);
    }

}