import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CEditProgressModalConfigList } from '../../edit-progress-modal.config';

@Component({
  selector: 'app-edit-form-education',
  templateUrl: './edit-form-education.component.html',
  styleUrls: ['./edit-form-education.component.scss']
})
export class EditFormEducationComponent implements OnInit{
  public editModalFormGroup: FormGroup;
  public editProgressModalConfig = CEditProgressModalConfigList;
  @Input() progressModalData: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void{
    this.editModalFormGroup = this.formBuilder.group({
      educationName: this.formBuilder.control(this.progressModalData.educationName, [Validators.required]),
      specialty: this.formBuilder.control(this.progressModalData.specialty, [Validators.required]),
      educationDescription: this.formBuilder.control(this.progressModalData.educationDescription, [Validators.required]),
      dateFrom: this.formBuilder.control(this.progressModalData.dateFrom, [Validators.required]),
      dateTill: this.formBuilder.control(this.progressModalData.dateTill, [Validators.required]),
    });
  }
}
