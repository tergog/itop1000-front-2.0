import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-experience-modal',
  templateUrl: './add-experience-modal.component.html',
  styleUrls: ['./add-experience-modal.component.scss']
})
export class AddExperienceModalComponent implements OnInit {
  public addModalFormGroup: FormGroup;

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

  constructor(private formBuilder: FormBuilder) {
    this.addModalFormGroup = this.formBuilder.group({
      companyName: this.formBuilder.control({ value: 'Deal Design', disabled: false }, [Validators.required]),
      jobTitle: this.formBuilder.control({ value: 'Job Title', disabled: false }, [Validators.required]),
      positionTitle: this.formBuilder.control({ value: 'Position Title', disabled: false }, [Validators.required]),
      jobDescription: this.formBuilder.control({ value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', disabled: false }, [Validators.required]),
      dateFrom: this.formBuilder.control(
        { value: '20.07.2021', disabled: false },
        [Validators.required]
      ),
      dateTill: this.formBuilder.control(
        { value: '21.07.2021', disabled: false },
        [Validators.required]
      ),
    });
  }

  ngOnInit(): void {
  }

}
