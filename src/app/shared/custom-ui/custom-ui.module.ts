import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button/button.module';
import { InputComponent } from './input/input.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { LogoComponent } from './logo/logo.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { BenefitsCardComponent } from './benefits-card/benefits-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    InputComponent,
    ArrowDownComponent,
    LogoComponent,
    PreviewCardComponent,
    BenefitsCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ButtonModule, InputComponent, ArrowDownComponent, LogoComponent, PreviewCardComponent, BenefitsCardComponent, ProjectCardComponent]
})
export class CustomUiModule {
}
