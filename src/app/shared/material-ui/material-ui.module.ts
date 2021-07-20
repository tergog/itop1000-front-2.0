import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SelectModule } from './select/select.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { RoleToggleModule } from './role-toggle/role-toggle.module';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    SelectModule,
    CheckboxModule,
    RoleToggleModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatChipsModule
  ],
  exports: [
    ButtonToggleComponent,
    SelectModule,
    CheckboxModule,
    RoleToggleModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatChipsModule
  ]
})

export class MaterialUiModule {
}
