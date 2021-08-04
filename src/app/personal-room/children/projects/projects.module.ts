import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './component/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardModule } from '../../../shared/project-card/project-card.module';
import { SearchInputModule } from '../../../shared/material-ui/search-input/search-input.module';
import { ButtonModule } from '../../../shared/custom-ui/button/button.module';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectCardModule,
    SearchInputModule,
    ButtonModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
