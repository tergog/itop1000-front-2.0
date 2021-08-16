import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityEditComponent } from './component/security-edit.component';
import { SecurityEditRoutingModule } from './security-edit-routing.module';
import { CustomUiModule } from '../../../../../shared/custom-ui/custom-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFormComponent } from './children/edit-form/edit-form.component';
import { AuthenticationComponent } from './children/authentication/authentication.component';
import { InputAuthenticationModule } from '../../../../../shared/custom-ui/input-authentication/input-authentication.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    SecurityEditComponent,
    EditFormComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    SecurityEditRoutingModule,
    CustomUiModule,
    FormsModule,
    ReactiveFormsModule,
    InputAuthenticationModule,
    ReactiveComponentModule
  ],
  exports: [
    SecurityEditComponent
  ]
})
export class SecurityEditModule { }
