import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { Provider } from "@angular/core";
import { StorageService } from "@core/services/storage.service";
import { AuthInterceptor } from "./auth.interceptor";

export const HttpInterceptorProviders: Provider[] = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, deps: [StorageService] }
]