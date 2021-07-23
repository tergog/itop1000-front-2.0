import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatHorizontalStepper } from '@angular/material/stepper';

import { EStepperType } from '../stepper.enums';
import { IStepperParameters } from '../stepper.interfaces';
import { ItopDataService } from '../../../services/itop-data/itop-data.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  public EStepperType = EStepperType;
  public firstStepFormGroup: FormGroup;
  public secondStepFormGroup: FormGroup;
  public thirdStepFormGroup: FormGroup;
  public fourthStepFormGroup: FormGroup;
  public stepperParameters$: BehaviorSubject<IStepperParameters>;
  public declension = ['1st', '2nd', '3rd', '4th'];
  public step = 0;

  constructor(
    private stepperData: ItopDataService,
    private _formBuilder: FormBuilder
  ) {
    this.firstStepFormGroup = _formBuilder.group({
      category: _formBuilder.control('', [Validators.required]),
      subcategory: _formBuilder.control('', [Validators.required])
    });
    this.secondStepFormGroup = _formBuilder.group({
      skills: _formBuilder.control(['HTML', 'CSS', 'JavaScript'], [])
    });
    this.thirdStepFormGroup = _formBuilder.group({
      experience: _formBuilder.control([])
    });
    this.fourthStepFormGroup = _formBuilder.group({
      rate: _formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.stepperParameters$ = this.stepperData.stepperPageData$;
    this.firstStepFormGroup.controls.category.statusChanges.subscribe(value => {
      this.firstStepFormGroup.controls.subcategory.setValue('Hello');
    });
  }

  ngAfterViewInit(): void {
    this.stepper.selectionChange.subscribe(steps => this.step = steps.selectedIndex);
  }

  sendUserSignUpData(): void {
    const stepperFormGroup = this._formBuilder.group({
      first: this.firstStepFormGroup,
      second: this.secondStepFormGroup,
      third: this.thirdStepFormGroup,
      fourth: this.fourthStepFormGroup,
    });
    console.log(stepperFormGroup.value);
  }
}
