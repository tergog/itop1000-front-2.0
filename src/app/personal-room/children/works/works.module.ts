import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksComponent } from './component/works.component';
import { WorksRoutingModule } from './works-routing.module';
import { ProjectCardModule } from '../../../shared/project-card/project-card.module';
import { WorksListComponent } from './children/works-list/works-list.component';
import { WorksCommentComponent } from './children/works-comment/works-comment.component';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';

@NgModule({
  declarations: [
    WorksComponent,
    WorksListComponent,
    WorksCommentComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    ProjectCardModule,
    CustomUiModule
  ],
  exports: [
    WorksComponent
  ]
})
export class WorksModule {
}
