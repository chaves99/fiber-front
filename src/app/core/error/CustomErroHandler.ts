import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { StorageService } from "@core/services/storage.service";

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

    constructor(
        private zone: NgZone,
        private router: Router,
        private snackBar: MatSnackBar,
        private storageService: StorageService
    ) { }

    /**
     * The problem of statusCode is not in the backend
     */
    handleError(error: any): void {
        this.zone.run(() => {
            if (error instanceof HttpErrorResponse) {
                if (error.status > 404 || error.status < 404) {
                    console.log(error);
                    this.snackBar.open(`status:${error.status} | message:${error.message}`, 'OK', { duration: 2000 });
                    this.router.navigateByUrl('feature/login');
                    this.storageService.clearUser();
                }
            }
            if (error instanceof Error) {
                // this.snackBar.open(`cause:${error.cause} message:${error.message}`, 'OK');
                throw error;
            }
        });
    }
}