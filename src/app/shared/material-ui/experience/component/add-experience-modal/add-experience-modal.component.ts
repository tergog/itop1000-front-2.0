import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experience-modal',
  templateUrl: './add-experience-modal.component.html',
  styleUrls: ['./add-experience-modal.component.scss']
})
export class AddExperienceModalComponent implements OnInit {

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
        label: 'Date',
        error: 'Please, enter required data'
      },
      dateTill: {
        placeholder: 'Enter data',
        type: 'date',
        label: 'Date',
        error: 'Please, enter required data'
      }
    },
    buttons: {
      save: {
        text: 'Save',
        type: '',
        view: 'small',
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
