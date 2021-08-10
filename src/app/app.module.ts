import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './shared/header/header.module';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { AuthInterceptorService } from './services/auth-iterceptor/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HeaderModule,
    OverlayModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
