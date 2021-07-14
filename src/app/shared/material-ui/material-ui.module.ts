import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SelectModule } from './select/select.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { RoleToggleModule } from './role-toggle/role-toggle.module';

@NgModule({
  declarations: [
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    SelectModule,
    CheckboxModule,
    RoleToggleModule
  ],
  exports: [
    ButtonToggleComponent,
    SelectModule,
    CheckboxModule,
    RoleToggleModule
  ]
})
export class MaterialUiModule {
}
