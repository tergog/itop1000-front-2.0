import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SelectModule } from './select/select.module';
import { CheckboxModule } from './checkbox/checkbox.module';

@NgModule({
  declarations: [
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    SelectModule,
    CheckboxModule
  ],
  exports: [
    ButtonToggleComponent,
    SelectModule,
    CheckboxModule
  ]
})
export class MaterialUiModule {
}
