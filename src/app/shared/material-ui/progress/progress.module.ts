import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ProgressComponent } from './component/progress.component';
import { AddProgressModalComponent } from './component/add-progress-modal/component/add-progress-modal.component';
import { ProgressCardComponent } from './component/progress-card/component/progress-card.component';
import { CustomUiModule } from '../../custom-ui/custom-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProgressModalComponent } from './component/edit-progress-modal/component/edit-progress-modal.component';
import { RemoveProgressModalComponent } from './component/remove-progress-modal/component/remove-progress-modal.component';
import { AddFormEducationComponent } from './component/add-progress-modal/children/add-form-education/add-form-education.component';
import { AddFormExperienceComponent } from './component/add-progress-modal/children/add-form-experience/add-form-experience.component';
import { EditFormEducationComponent } from './component/edit-progress-modal/children/edit-form-education/edit-form-education.component';
import { EditFormExperienceComponent } from './component/edit-progress-modal/children/edit-form-experience/edit-form-experience.component';

@NgModule({
  declarations: [
    ProgressComponent,
    AddProgressModalComponent,
    ProgressCardComponent,
    EditProgressModalComponent,
    RemoveProgressModalComponent,
    AddFormEducationComponent,
    AddFormExperienceComponent,
    EditFormEducationComponent,
    EditFormExperienceComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CustomUiModule,
    ReactiveFormsModule
  ],
  exports: [
    ProgressComponent,
    ProgressCardComponent,
    AddFormEducationComponent,
    AddFormExperienceComponent,
    EditFormEducationComponent,
    EditFormExperienceComponent
  ]
})
export class ProgressModule {
}
