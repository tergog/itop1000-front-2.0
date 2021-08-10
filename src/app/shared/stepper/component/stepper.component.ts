import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { takeUntil } from 'rxjs/operators';

import { EStepperType } from '../stepper.enums';
import { IStepperParameters } from '../stepper.interfaces';
import { ItopDataService } from '../../../services/itop-data/itop-data.service';
import {
  CFreelancerCategoryWorks,
  CLocation,
  COperationMode,
  CProductOwnerCategoryWorks,
  CSubcategoryWorks
} from '../../../constantes/constantes';
import { AuthorizationDataService } from '../../../authorization/services/authorization-data/authorization-data.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  public selectFreelancerCategories = CFreelancerCategoryWorks;
  public selectProductOwnerCategories = CProductOwnerCategoryWorks;
  public selectSubcategories: { [key: string]: string[] } = CSubcategoryWorks;
  public locationList = CLocation;
  public operationModeList = COperationMode;
  // public freelancerValidation = false;
  // public productOwnerValidation = false;
  public EStepperType = EStepperType;
  public productOwnerFormsGroup: FormGroup;
  public freelancerFormsGroup: FormGroup;
  public productOwnerFormsGroupLinks: { [key: string]: FormGroup };
  public freelancerGroupLinks: { [key: string]: FormGroup };
  public stepperParameters$: BehaviorSubject<IStepperParameters>;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private stepperData: ItopDataService,
    private _formBuilder: FormBuilder,
    private authorizationData: AuthorizationDataService
  ) {
    this.productOwnerFormsGroup = this._formBuilder.group({
      firstStepFormGroup: this._formBuilder.group({
        name: this._formBuilder.control('', [Validators.required, Validators.minLength(2)]),
        description: this._formBuilder.control('', [])
      }),
      secondStepFormGroup: this._formBuilder.group({
        category: this._formBuilder.control(this.selectProductOwnerCategories, [Validators.required])
      }),
      thirdStepFormGroup: this._formBuilder.group({
        location: this._formBuilder.control(this.locationList, [Validators.required])
      }),
      fourthStepFormGroup: _formBuilder.group({
        operationMode: this._formBuilder.control(this.operationModeList, [Validators.required])
      })
    });
    this.freelancerFormsGroup = this._formBuilder.group({
      firstStepFormGroup: _formBuilder.group({
        category: _formBuilder.control(this.selectFreelancerCategories, [Validators.required]),
        subcategory: _formBuilder.control('', [Validators.required])
      }),
      secondStepFormGroup: _formBuilder.group({
        skills: _formBuilder.control([], [Validators.required])
      }),
      thirdStepFormGroup: _formBuilder.group({
        experiences: _formBuilder.control([], [Validators.required])
      }),
      fourthStepFormGroup: _formBuilder.group({
        rate: _formBuilder.control(null, [Validators.required, Validators.minLength(2)])
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
    this.freelancerGroupLinks.firstGroup.controls.category.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value: string) => {
      this.freelancerGroupLinks.firstGroup.controls.subcategory
        .setValue(this.selectSubcategories[value]);
    });
  }

  sendFreelancerSignUpData(): void {
    if (this.freelancerFormsGroup.valid) {
      this.authorizationData.setStepperData(this.freelancerFormsGroup.value);
    }
  }

  sendProductOwnerSignUpData(): void {
    if (this.productOwnerFormsGroup.valid) {
      this.authorizationData.setStepperData(this.productOwnerFormsGroup.value);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
