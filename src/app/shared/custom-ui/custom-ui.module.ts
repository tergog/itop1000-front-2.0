import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button/button.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ButtonModule, InputComponent]
})
export class CustomUiModule {
}
