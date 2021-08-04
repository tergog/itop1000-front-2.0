import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksComponent } from './component/works.component';
import { WorksRoutingModule } from './works-routing.module';
import { ProjectCardModule } from '../../../shared/project-card/project-card.module';

@NgModule({
  declarations: [
    WorksComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    ProjectCardModule
  ],
  exports: [
    WorksComponent
  ]
})
export class WorksModule {
}
