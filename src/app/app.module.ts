import { CoreModule } from './services/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { ENVIRONMENT } from './services/shared';
import {ToastModule} from 'primeng/toast';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { AuthGuardService } from './shared/services/auth.guard.service';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders,
    { provide: ENVIRONMENT, useValue: environment }, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
