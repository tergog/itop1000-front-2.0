import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRadioModule } from '@angular/material/radio';

import { RoleToggleComponent } from './component/role-toggle.component';

@NgModule({
  declarations: [
    RoleToggleComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports: [
    RoleToggleComponent
  ]
})
export class RoleToggleModule {
}
