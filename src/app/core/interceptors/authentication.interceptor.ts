import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginResponseModel } from "@core/models/login.model";
import { LocalStorageService } from "@core/service/local-storage.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    private readonly HEADER_AUTH_KEY: string = 'Authorization';

    constructor(
        private localStorageService: LocalStorageService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loggedUser = this.localStorageService.getloggedUser();
        let authParam = req.headers.get(this.HEADER_AUTH_KEY);

        if (loggedUser != null && authParam != null) {
            let newReq = req.clone({
                headers: req.headers.set('Authorization', `bearer ${loggedUser.token}`)
            });
            return next.handle(newReq);
        }
        return next.handle(req);
    }

}