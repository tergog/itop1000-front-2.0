import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CEditProgressModalConfigList } from '../../edit-progress-modal.config';

@Component({
  selector: 'app-edit-form-experience',
  templateUrl: './edit-form-experience.component.html',
  styleUrls: ['./edit-form-experience.component.scss']
})
export class EditFormExperienceComponent implements OnInit {
  public editModalFormGroup: FormGroup;
  public editProgressModalConfig = CEditProgressModalConfigList;
  @Input() progressModalData: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.editModalFormGroup = this.formBuilder.group({
      name: this.formBuilder.control(this.progressModalData.name, [Validators.required]),
      jobTitle: this.formBuilder.control(this.progressModalData.jobTitle, [Validators.required]),
      positionTitle: this.formBuilder.control(this.progressModalData.positionTitle, [Validators.required]),
      description: this.formBuilder.control(this.progressModalData.description, [Validators.required]),
      dateFrom: this.formBuilder.control(this.progressModalData.dateFrom, [Validators.required]),
      dateTill: this.formBuilder.control(this.progressModalData.dateTill, [Validators.required]),
    });
  }
}
