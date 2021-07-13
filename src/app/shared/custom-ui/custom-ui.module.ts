import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button/button.module';
import { InputComponent } from './input/input.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { LogoComponent } from './logo/logo.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';

@NgModule({
  declarations: [
    InputComponent,
    ArrowDownComponent,
    LogoComponent,
    PreviewCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ButtonModule, InputComponent, ArrowDownComponent, LogoComponent, PreviewCardComponent]
})
export class CustomUiModule {
}
