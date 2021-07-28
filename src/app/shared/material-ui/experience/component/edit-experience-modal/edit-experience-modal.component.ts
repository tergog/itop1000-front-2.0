import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-experience-modal',
  templateUrl: './edit-experience-modal.component.html',
  styleUrls: ['./edit-experience-modal.component.scss']
})
export class EditExperienceModalComponent implements OnInit {
  public editModalFormGroup: FormGroup;

  public modalData = {
    inputs: {
      companyName: {
        placeholder: 'Company name',
        type: 'text',
        label: 'Company name',
        error: 'There is a mistake, please, check and enter the Company name'
      },
      jobTitle: {
        placeholder: 'Job title',
        type: 'text',
        label: 'Job title',
        error: 'There is a mistake, please, check and enter the Job title'
      },
      positionTitle: {
        placeholder: 'Position title',
        type: 'text',
        label: 'Position title',
        error: 'There is a mistake, please, check and enter the Position title'
      },
      jobDescription: {
        placeholder: 'Job Description',
        type: 'textarea',
        label: 'Job Description (Optional)',
        error: 'There is a mistake, please, check and enter the Job Description'
      },
      dateFrom: {
        placeholder: 'Enter data',
        type: 'date',
        label: 'Date From',
        error: 'Please, enter required data'
      },
      dateTill: {
        placeholder: 'Enter data',
        type: 'date',
        label: 'Till',
        error: 'Please, enter required data'
      }
    },
    buttons: {
      save: {
        text: 'Save',
        type: 'submit',
        view: 'medium',
        disabled: false
      },
      cancel: {
        text: 'Cancel',
        type: '',
        view: 'small-empty',
        disabled: false
      },
      close: {
        text: '',
        type: '',
        view: 'close',
        disabled: false
      }
    }
  };

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

  ngOnInit(): void {
  }
}
