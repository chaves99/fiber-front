import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private storageService: StorageService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`AuthInterceptor - req:${req.headers}`);
        let user = this.storageService.getUser();
        if (user !== undefined && user.token) {
            return next.handle(req.clone({ setHeaders: { Authorization: user.token } }));
        }
        return next.handle(req);
    }

}