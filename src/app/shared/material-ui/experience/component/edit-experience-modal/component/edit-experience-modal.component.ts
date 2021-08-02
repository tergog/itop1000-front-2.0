import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CEditExperienceModalConfigList } from '../edit-experience-modal.config';

@Component({
  selector: 'app-edit-experience-modal',
  templateUrl: './edit-experience-modal.component.html',
  styleUrls: ['./edit-experience-modal.component.scss']
})
export class EditExperienceModalComponent {
  public editModalFormGroup: FormGroup;
  public editExperienceModalConfig = CEditExperienceModalConfigList;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editModalFormGroup = this.formBuilder.group({
      companyName: this.formBuilder.control(this.data.companyName, [Validators.required]),
      jobTitle: this.formBuilder.control(this.data.jobTitle, [Validators.required]),
      positionTitle: this.formBuilder.control(this.data.positionTitle, [Validators.required]),
      jobDescription: this.formBuilder.control(this.data.jobDescription, [Validators.required]),
      dateFrom: this.formBuilder.control(this.data.dateFrom, [Validators.required]),
      dateTill: this.formBuilder.control(this.data.dateTill, [Validators.required]),
    });
  }
}
