import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SelectModule } from './select/select.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { RoleToggleModule } from './role-toggle/role-toggle.module';
import { ProgressModule } from './progress/progress.module';
import { SearchInputModule } from './search-input/search-input.module';

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
    ProgressModule,
    SearchInputModule
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
    MatChipsModule,
    ProgressModule,
    SearchInputModule
  ]
})

export class MaterialUiModule {
}
