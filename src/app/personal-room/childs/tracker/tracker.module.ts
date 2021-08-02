import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerComponent } from './component/tracker.component';
import { TrackerRoutingModule } from './tracker-routing.module';

@NgModule({
  declarations: [
    TrackerComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule
  ],
  exports: [
    TrackerComponent
  ]
})
export class TrackerModule { }
