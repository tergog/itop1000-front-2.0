import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ProjectCardComponent } from './component/project-card.component';
import { ButtonModule } from '../custom-ui/button/button.module';

@NgModule({
  declarations: [
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule,
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ProjectCardModule {
}
