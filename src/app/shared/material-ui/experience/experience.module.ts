import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ExperienceComponent } from './component/experience.component';
import { AddExperienceModalComponent } from './component/add-experience-modal/add-experience-modal.component';
import { ExperienceCardComponent } from './component/experience-card/experience-card.component';
import { CustomUiModule } from '../../custom-ui/custom-ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExperienceComponent,
    AddExperienceModalComponent,
    ExperienceCardComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CustomUiModule,
    ReactiveFormsModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule {
}
