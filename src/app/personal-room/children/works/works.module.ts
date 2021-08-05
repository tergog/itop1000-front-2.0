import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksComponent } from './component/works.component';
import { WorksRoutingModule } from './works-routing.module';
import { ProjectCardModule } from '../../../shared/project-card/project-card.module';
import { WorksListComponent } from './children/works-list/works-list.component';
import { WorksCommentComponent } from './children/works-comment/works-comment.component';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentModule } from '../comment/comment.module';

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
    CustomUiModule,
    ReactiveFormsModule,
    MatExpansionModule,
    CommentModule
  ],
  exports: [
    WorksComponent
  ]
})
export class WorksModule {
}
