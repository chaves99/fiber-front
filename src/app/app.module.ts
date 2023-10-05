import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService, LoginServiceImpl } from '@core/services/http/login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorProviders } from './core/interceptors';
import { StorageService, StorageServiceImpl } from './core/services/storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: StorageService, useClass: StorageServiceImpl },
    { provide: LoginService, useClass: LoginServiceImpl },
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
