import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public fourthFormGroup: FormGroup;
  public stepperParameters = {
    firstStep: {
      category: {
        label: 'Category',
        options: [
          'Accounting & Consulting',
          'Admin Support',
          'Customer Service',
          'Data science & Analytics',
          'Design & Creative',
          'Engineering & Architecture',
          'IT & Networking',
          'Legal',
          'Sales & Marketing',
          'Translation'
        ],
        defaultValue: 'Select the category'
      },
      subcategory: {
        label: 'Subcategory',
        options: [
          'Accounting & Consulting',
          'Admin Support',
          'Customer Service',
          'Data science & Analytics',
          'Design & Creative',
          'Engineering & Architecture',
          'IT & Networking',
          'Legal',
          'Sales & Marketing',
          'Translation'
        ],
        defaultValue: 'Select the subcategory'
      }
    },
    buttonNext: {
      text: 'NEXT',
      type: '',
      view: 'small',
      disabled: false
    },
    buttonPrevious: {
      text: 'Back',
      type: '',
      view: 'small-empty',
      disabled: false
    }
  };

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({});
    this.secondFormGroup = this._formBuilder.group({});
    this.thirdFormGroup = this._formBuilder.group({});
    this.fourthFormGroup = this._formBuilder.group({});
  }
}
