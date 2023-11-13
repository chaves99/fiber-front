import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomErrorHandler } from '@core/error/CustomErroHandler';
import { LoginService, LoginServiceImpl } from '@core/services/http/login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorProviders } from './core/interceptors';
import { StorageService, StorageServiceImpl } from './core/services/storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Angular Material
    MatSnackBarModule
  ],
  providers: [
    { provide: StorageService, useClass: StorageServiceImpl },
    { provide: LoginService, useClass: LoginServiceImpl },
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    [...HttpInterceptorProviders]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
