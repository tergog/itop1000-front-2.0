import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationComponent } from './component/authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { CustomUiModule } from '../shared/custom-ui/custom-ui.module';
import { StepperModule } from '../shared/stepper/stepper.module';
import { MaterialUiModule } from '../shared/material-ui/material-ui.module';

@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    CustomUiModule,
    StepperModule,
    MaterialUiModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
