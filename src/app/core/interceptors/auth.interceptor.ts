import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private storageService: StorageService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user = this.storageService.getUser();
        let corsHeader = { 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE' }
        if (user !== undefined && user.token) {
            return next
                .handle(req.clone({ setHeaders: { Authorization: `Bearer ${user.token}`, ...corsHeader } }));
        }
        return next.handle(req.clone({ setHeaders: corsHeader }));
    }

}