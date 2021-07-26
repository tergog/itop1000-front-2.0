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
  public productOwnerFormsGroup: FormGroup;
  public freelancerFormsGroup: FormGroup;
  public productOwnerFormsGroupLinks: { [key: string]: FormGroup };
  public freelancerGroupLinks: { [key: string]: FormGroup };
  public stepperParameters$: BehaviorSubject<IStepperParameters>;
  public declension = ['1st', '2nd', '3rd', '4th'];
  public step = 0;

  constructor(
    private stepperData: ItopDataService,
    private _formBuilder: FormBuilder
  ) {
    this.productOwnerFormsGroup = this._formBuilder.group({
      firstStepFormGroup: this._formBuilder.group({
        companyName: this._formBuilder.control('', []),
        companyDescription: this._formBuilder.control('', [])
      }),
      secondStepFormGroup: this._formBuilder.group({
        category: this._formBuilder.control('', [])
      }),
      thirdStepFormGroup: this._formBuilder.group({
        location: this._formBuilder.control('', [])
      }),
      fourthStepFormGroup: _formBuilder.group({
        operationMode: this._formBuilder.control('', [])
      })
    });
    this.freelancerFormsGroup = this._formBuilder.group({
      firstStepFormGroup: _formBuilder.group({
        category: _formBuilder.control('', [Validators.required]),
        subcategory: _formBuilder.control('', [Validators.required])
      }),
      secondStepFormGroup: _formBuilder.group({
        skills: _formBuilder.control(['HTML', 'CSS', 'JavaScript'], [])
      }),
      thirdStepFormGroup: _formBuilder.group({
        experience: _formBuilder.control([])
      }),
      fourthStepFormGroup: _formBuilder.group({
        rate: _formBuilder.control('', [Validators.required])
      })
    });
    this.productOwnerFormsGroupLinks = {
      firstGroup: this.productOwnerFormsGroup.get('firstStepFormGroup') as FormGroup,
      secondGroup: this.productOwnerFormsGroup.get('secondStepFormGroup') as FormGroup,
      thirdGroup: this.productOwnerFormsGroup.get('thirdStepFormGroup') as FormGroup,
      fourthGroup: this.productOwnerFormsGroup.get('fourthStepFormGroup') as FormGroup,
    };
    this.freelancerGroupLinks = {
      firstGroup: this.freelancerFormsGroup.get('firstStepFormGroup') as FormGroup,
      secondGroup: this.freelancerFormsGroup.get('secondStepFormGroup') as FormGroup,
      thirdGroup: this.freelancerFormsGroup.get('thirdStepFormGroup') as FormGroup,
      fourthGroup: this.freelancerFormsGroup.get('fourthStepFormGroup') as FormGroup,
    };
  }

  ngOnInit(): void {
    this.stepperParameters$ = this.stepperData.stepperPageData$;
    this.freelancerGroupLinks.firstGroup.controls.category.statusChanges.subscribe(value => {
      this.freelancerGroupLinks.firstGroup.controls.subcategory.setValue('Hello');
    });
  }

  ngAfterViewInit(): void {
    this.stepper.selectionChange.subscribe(steps => this.step = steps.selectedIndex);
  }

  sendUserSignUpData(): void {
    console.log(this.productOwnerFormsGroup.value);
    console.log(this.freelancerFormsGroup.value);
  }
}
