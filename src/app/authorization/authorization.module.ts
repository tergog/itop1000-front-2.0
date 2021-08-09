import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthorizationComponent } from './component/authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { CustomUiModule } from '../shared/custom-ui/custom-ui.module';
import { StepperModule } from '../shared/stepper/stepper.module';
import { MaterialUiModule } from '../shared/material-ui/material-ui.module';
import { ModalSelectRoleComponent } from './children/modal-select-role/modal-select-role.component';
import { AuthorizationFormComponent } from './children/authorization-form/authorization-form.component';
import { ButtonModule } from '../shared/custom-ui/button/button.module';
import { ModalAcceptRuleComponent } from './children/modal-accept-rule/component/modal-accept-rule.component';
import { QrCodeComponent } from './children/qr-code/component/qr-code.component';
import { AuthenticationComponent } from './children/authentication/authentication.component';
import { WaitingComponent } from './children/waiting/waiting.component';

@NgModule({
  declarations: [
    AuthorizationComponent,
    ModalSelectRoleComponent,
    AuthorizationFormComponent,
    ModalAcceptRuleComponent,
    QrCodeComponent,
    AuthenticationComponent,
    WaitingComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    CustomUiModule,
    StepperModule,
    MaterialUiModule,
    MatDialogModule,
    ReactiveComponentModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
