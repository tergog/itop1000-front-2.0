import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ButtonModule } from './button/button.module';
import { InputComponent } from './input/component/input.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { LogoComponent } from './logo/component/logo.component';
import { PreviewCardComponent } from './preview-card/component/preview-card.component';
import { BenefitsCardComponent } from './benefits-card/benefits-card.component';
import { PreviewProjectCardComponent } from './preview-project-card/component/preview-project-card.component';
import { SocialListComponent } from './social-list/component/social-list.component';
import { CustomTooltipModule } from './custom-tooltip/custom-tooltip.module';
import { MoneyFormatInputDirective } from '../../directives/money-format-input/money-format-input.directive';
import { SkillGradeComponent } from './skill-grade/skill-grade.component';
import { UserCardComponent } from './user-card/component/user-card.component';
import { MatIconModule } from '@angular/material/icon';
import { LanguageModule } from './language/language.module';

@NgModule({
  declarations: [
    InputComponent,
    ArrowDownComponent,
    LogoComponent,
    PreviewCardComponent,
    BenefitsCardComponent,
    PreviewProjectCardComponent,
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
    MatNativeDateModule,
    MatIconModule
  ],
  exports: [
    ButtonModule,
    InputComponent,
    ArrowDownComponent,
    LogoComponent,
    PreviewCardComponent,
    BenefitsCardComponent,
    PreviewProjectCardComponent,
    SocialListComponent,
    CustomTooltipModule,
    SkillGradeComponent,
    UserCardComponent
  ]
})
export class CustomUiModule {
}
