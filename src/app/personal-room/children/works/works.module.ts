import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksComponent } from './component/works.component';
import { WorksRoutingModule } from './works-routing.module';

@NgModule({
  declarations: [
    WorksComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule
  ],
  exports: [
    WorksComponent
  ]
})
export class WorksModule {
}
