import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationComponent } from './component/authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';

@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
