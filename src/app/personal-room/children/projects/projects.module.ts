import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './component/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardModule } from '../../../shared/project-card/project-card.module';
import { SearchInputModule } from '../../../shared/material-ui/search-input/search-input.module';
import { ButtonModule } from '../../../shared/custom-ui/button/button.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialUiModule } from '../../../shared/material-ui/material-ui.module';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectCardModule,
    SearchInputModule,
    ButtonModule,
    MatExpansionModule,
    MaterialUiModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
