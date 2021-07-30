import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ButtonModule } from './button/button.module';
import { InputComponent } from './input/input.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { LogoComponent } from './logo/logo.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { BenefitsCardComponent } from './benefits-card/benefits-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SocialListComponent } from './social-list/social-list.component';
import { CustomTooltipModule } from './custom-tooltip/custom-tooltip.module';
import { MoneyFormatInputDirective } from '../../directives/money-format-input/money-format-input.directive';
import { SkillGradeComponent } from './skill-grade/skill-grade.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    InputComponent,
    ArrowDownComponent,
    LogoComponent,
    PreviewCardComponent,
    BenefitsCardComponent,
    ProjectCardComponent,
    SocialListComponent,
    MoneyFormatInputDirective,
    SkillGradeComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    CustomTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
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
    CustomTooltipModule,
    SkillGradeComponent,
    UserCardComponent
  ]
})
export class CustomUiModule {
}
