import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

import { ProjectsComponent } from './component/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardModule } from '../../../shared/project-card/project-card.module';
import { SearchInputModule } from '../../../shared/material-ui/search-input/search-input.module';
import { ButtonModule } from '../../../shared/custom-ui/button/button.module';
import { MaterialUiModule } from '../../../shared/material-ui/material-ui.module';
import { SelectionHelpModalComponent } from './children/selection-help-modal/component/selection-help-modal.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    SelectionHelpModalComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectCardModule,
    SearchInputModule,
    ButtonModule,
    MatExpansionModule,
    MaterialUiModule,
    MatDialogModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
