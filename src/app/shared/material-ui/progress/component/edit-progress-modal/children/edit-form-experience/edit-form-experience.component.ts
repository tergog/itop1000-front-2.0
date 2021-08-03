import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CEditProgressModalConfigList } from '../../edit-progress-modal.config';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-form-experience',
  templateUrl: './edit-form-experience.component.html',
  styleUrls: ['./edit-form-experience.component.scss']
})
export class EditFormExperienceComponent {
  public editModalFormGroup: FormGroup;
  public editProgressModalConfig = CEditProgressModalConfigList;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.editModalFormGroup = this.formBuilder.group({
      companyName: this.formBuilder.control(this.data.formValues.companyName, [Validators.required]),
      jobTitle: this.formBuilder.control(this.data.formValues.jobTitle, [Validators.required]),
      positionTitle: this.formBuilder.control(this.data.formValues.positionTitle, [Validators.required]),
      jobDescription: this.formBuilder.control(this.data.formValues.jobDescription, [Validators.required]),
      dateFrom: this.formBuilder.control(this.data.formValues.dateFrom, [Validators.required]),
      dateTill: this.formBuilder.control(this.data.formValues.dateTill, [Validators.required]),
    });
  }
}
