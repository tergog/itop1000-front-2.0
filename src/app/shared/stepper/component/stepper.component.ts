import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EStepperType } from '../stepper.enums';
import { IStepperParameters } from '../stepper.interfaces';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public EStepperType = EStepperType;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public fourthFormGroup: FormGroup;

  public _stepperParameters: IStepperParameters;
  @Input() set stepperParameters(value: IStepperParameters) {
    this._stepperParameters = value;
  }

  get stepperParameters(): IStepperParameters {
    return this._stepperParameters;
  }

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({});
    this.secondFormGroup = this._formBuilder.group({});
    this.thirdFormGroup = this._formBuilder.group({});
    this.fourthFormGroup = this._formBuilder.group({});
  }
}
