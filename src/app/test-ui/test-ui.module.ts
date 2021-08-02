import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestUiComponent } from './component/test-ui.component';
import { SharedModule } from '../shared/shared.module';
import { TestUiRoutingModule } from './test-ui-routing.module';
import { ChipsModule } from '../shared/material-ui/chips/chips.module';
import { StepperModule } from '../shared/stepper/stepper.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { ProjectCardModule } from '../shared/project-card/project-card.module';

@NgModule({
  declarations: [
    TestUiComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestUiRoutingModule,
    ChipsModule,
    StepperModule,
    LoaderModule,
    ProjectCardModule
  ],
  exports: [
    TestUiComponent
  ]
})
export class TestUiModule { }
