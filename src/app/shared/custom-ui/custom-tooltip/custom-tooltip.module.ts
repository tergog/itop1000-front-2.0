import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTooltipDirective } from './directive/custom-tooltip.directive';
import { CustomTooltipComponent } from './component/custom-tooltip.component';
import { CustomTooltipModalRequirementsComponent } from './component/custom-tooltip-modal-requirements/custom-tooltip-modal-requirements.component';
import { ButtonModule } from '../button/button.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CustomTooltipComponent,
    CustomTooltipDirective,
    CustomTooltipModalRequirementsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatDialogModule
  ],
  exports: [
    CustomTooltipComponent,
    CustomTooltipDirective
  ]
})
export class CustomTooltipModule {
}
