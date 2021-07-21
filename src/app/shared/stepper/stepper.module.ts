import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './component/stepper.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { CustomUiModule } from '../custom-ui/custom-ui.module';

@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    CustomUiModule
  ],
  exports: [
    StepperComponent
  ]
})
export class StepperModule { }
