import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityEditComponent } from './component/security-edit.component';
import { SecurityEditRoutingModule } from './security-edit-routing.module';
import { CustomUiModule } from '../../../../../shared/custom-ui/custom-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SecurityEditComponent
  ],
  imports: [
    CommonModule,
    SecurityEditRoutingModule,
    CustomUiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityEditModule { }
