import {NgModule, Type} from '@angular/core';
import {BrowserModule, Title}  from '@angular/platform-browser';

import {CovalentCoreModule} from '@covalent/core';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {appRoutes, appRoutingProviders} from './app.routes';
import {RequestInterceptor} from '../config/interceptors/request.interceptor';
import {RegisterComponent} from "./auth/register/register.component";
import {HttpService} from "./services/http.service";
import {AuthService} from "./auth/register/register.service";
import {UsersComponent} from "./users/users.component";
import {UsersFormComponent} from "./users/form/form.component";

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    appRoutes,
  ],
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
    HttpService,
    AuthService
  ], // additional providers needed for this module
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
