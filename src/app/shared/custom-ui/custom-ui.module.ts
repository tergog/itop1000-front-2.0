import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from './button/button.module';
import { InputComponent } from './input/input.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { LogoComponent } from './logo/logo.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { BenefitsCardComponent } from './benefits-card/benefits-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SocialListComponent } from './social-list/social-list.component';
import { CustomTooltipModule } from './custom-tooltip/custom-tooltip.module';
import { DateFormatInputDirective } from '../../directives/date-format-input/date-format-input.directive';

@NgModule({
  declarations: [
    InputComponent,
    ArrowDownComponent,
    LogoComponent,
    PreviewCardComponent,
    BenefitsCardComponent,
    ProjectCardComponent,
    SocialListComponent,
    DateFormatInputDirective
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    CustomTooltipModule
  ],
  exports: [
    ButtonModule,
    InputComponent,
    ArrowDownComponent,
    LogoComponent,
    PreviewCardComponent,
    BenefitsCardComponent,
    ProjectCardComponent,
    SocialListComponent,
    CustomTooltipModule
  ]
})
export class CustomUiModule {
}
