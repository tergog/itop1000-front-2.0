import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

@NgModule({
  declarations: [
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [
    ButtonToggleComponent
  ]
})
export class MaterialUiModule {
}
