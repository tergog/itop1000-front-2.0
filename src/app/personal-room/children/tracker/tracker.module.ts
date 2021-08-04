import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerComponent } from './component/tracker.component';
import { TrackerRoutingModule } from './tracker-routing.module';
import { ButtonModule } from '../../../shared/custom-ui/button/button.module';

@NgModule({
  declarations: [
    TrackerComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    ButtonModule
  ],
  exports: [
    TrackerComponent
  ]
})
export class TrackerModule { }
