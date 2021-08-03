import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ExperienceComponent } from './component/experience.component';
import { AddExperienceModalComponent } from './component/add-experience-modal/component/add-experience-modal.component';
import { ExperienceCardComponent } from './component/experience-card/component/experience-card.component';
import { CustomUiModule } from '../../custom-ui/custom-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditExperienceModalComponent } from './component/edit-experience-modal/component/edit-experience-modal.component';
import { RemoveExperienceModalComponent } from './component/remove-experience-modal/component/remove-experience-modal.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    AddExperienceModalComponent,
    ExperienceCardComponent,
    EditExperienceModalComponent,
    RemoveExperienceModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CustomUiModule,
    ReactiveFormsModule
  ],
  exports: [
    ExperienceComponent,
    ExperienceCardComponent
  ]
})
export class ExperienceModule {
}
