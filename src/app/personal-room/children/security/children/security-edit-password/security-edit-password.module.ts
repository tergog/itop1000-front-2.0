import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityEditPasswordComponent } from './component/security-edit-password.component';
import { SecurityEditPasswordRoutingModule } from './security-edit-password-routing.module';
import { ConfirmPasswordComponent } from './children/confirm-password/confirm-password.component';
import { AuthenticationComponent } from './children/authentication/authentication.component';
import { NewPasswordComponent } from './children/new-password/new-password.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { CustomUiModule } from '../../../../../shared/custom-ui/custom-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputAuthenticationModule } from '../../../../../shared/custom-ui/input-authentication/input-authentication.module';
import { CongratulationsComponent } from './children/congratulations/congratulations.component';

@NgModule({
  declarations: [
    SecurityEditPasswordComponent,
    ConfirmPasswordComponent,
    AuthenticationComponent,
    NewPasswordComponent,
    CongratulationsComponent
  ],
  imports: [
    CommonModule,
    SecurityEditPasswordRoutingModule,
    ReactiveComponentModule,
    CustomUiModule,
    ReactiveFormsModule,
    InputAuthenticationModule
  ]
})
export class SecurityEditPasswordModule { }
