import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sort } from './pipe';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Task2Component } from './pages/task2/task2.component';
import { OwnerService } from './OwnersService';
import { ErrorInterceptor } from './ErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sort,
    CommonModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), Task2Component, {provide:HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
