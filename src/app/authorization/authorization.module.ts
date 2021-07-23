import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationComponent } from './component/authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { CustomUiModule } from '../shared/custom-ui/custom-ui.module';
import { StepperModule } from '../shared/stepper/stepper.module';
import { MaterialUiModule } from '../shared/material-ui/material-ui.module';
import { ModalSelectRoleComponent } from './component/modal-select-role/modal-select-role.component';
import { AuthorizationFormComponent } from './component/authorization-form/authorization-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from '../shared/custom-ui/button/button.module';

@NgModule({
  declarations: [
    AuthorizationComponent,
    ModalSelectRoleComponent,
    AuthorizationFormComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    CustomUiModule,
    StepperModule,
    MaterialUiModule,
    MatDialogModule,
    ButtonModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
