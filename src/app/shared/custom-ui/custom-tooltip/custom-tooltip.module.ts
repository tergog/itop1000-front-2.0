import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomTooltipDirective } from './directive/custom-tooltip.directive';
import { CustomTooltipComponent } from './component/custom-tooltip.component';

@NgModule({
  declarations: [
    CustomTooltipComponent,
    CustomTooltipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomTooltipComponent,
    CustomTooltipDirective
  ]
})
export class CustomTooltipModule {
}
