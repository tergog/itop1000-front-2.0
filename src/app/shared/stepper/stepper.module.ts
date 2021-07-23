import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { StepperComponent } from './component/stepper.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { CustomUiModule } from '../custom-ui/custom-ui.module';
import { ChipsModule } from '../material-ui/chips/chips.module';
import { StepperRoutingModule } from './stepper-routing.module';

@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    CustomUiModule,
    ChipsModule,
    ReactiveComponentModule,
    StepperRoutingModule
  ],
  exports: [
    StepperComponent
  ]
})
export class StepperModule { }
