import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CEditProgressModalConfigList } from '../../edit-progress-modal.config';

@Component({
  selector: 'app-edit-form-education',
  templateUrl: './edit-form-education.component.html',
  styleUrls: ['./edit-form-education.component.scss']
})
export class EditFormEducationComponent {
  public editModalFormGroup: FormGroup;
  public editProgressModalConfig = CEditProgressModalConfigList;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.editModalFormGroup = this.formBuilder.group({
      educationName: this.formBuilder.control(this.data.formValues.companyName, [Validators.required]),
      specialty: this.formBuilder.control(this.data.formValues.jobTitle, [Validators.required]),
      educationDescription: this.formBuilder.control(this.data.formValues.jobDescription, [Validators.required]),
      dateFrom: this.formBuilder.control(this.data.formValues.dateFrom, [Validators.required]),
      dateTill: this.formBuilder.control(this.data.formValues.dateTill, [Validators.required]),
    });
  }
}
