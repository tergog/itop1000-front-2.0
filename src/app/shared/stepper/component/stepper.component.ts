import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EStepperType } from '../stepper.enums';
import { ItopDataService } from '../../../services/itop-data/itop-data.service';
import { AuthorizationService } from '../../../authorization/services/authorization/authorization.service';
import { CStepperConfigList } from '../stepper.config';
import { EUserRole } from '../../../enums/itop.enums';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, OnDestroy {
  public stepperConfig = CStepperConfigList;
  // public freelancerValidation = false;
  // public productOwnerValidation = false;
  public subCategory: string;
  public EStepperType = EStepperType;
  public productOwnerFormsGroup: FormGroup;
  public freelancerFormsGroup: FormGroup;
  public productOwnerGroupLinks: { [key: string]: FormGroup };
  public freelancerGroupLinks: { [key: string]: FormGroup };
  public userRole: string = localStorage.getItem('role') || EUserRole.Freelancer;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private itopDataService: ItopDataService,
    private authorizationData: AuthorizationService
  ) {
    this.productOwnerFormsGroup = new FormGroup({
      firstStepFormGroup: new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        description: new FormControl('', [Validators.minLength(50)])
      }),
      secondStepFormGroup: new FormGroup({
        category: new FormControl('', [Validators.required])
      }),
      thirdStepFormGroup: new FormGroup({
        location: new FormControl('', [Validators.required])
      }),
      fourthStepFormGroup: new FormGroup({
        operationMode: new FormControl('', [Validators.required])
      })
    });
    this.freelancerFormsGroup = new FormGroup({
      firstStepFormGroup: new FormGroup({
        category: new FormControl('', [Validators.required]),
        subcategory: new FormControl('', [Validators.required])
      }),
      secondStepFormGroup: new FormGroup({
        skills: new FormControl([], [Validators.required])
      }),
      thirdStepFormGroup: new FormGroup({
        experiences: new FormControl([])
      }),
      fourthStepFormGroup: new FormGroup({
        description: new FormControl('', [Validators.minLength(20)])
      }),
      fifthStepFormGroup: new FormGroup({
        rate: new FormControl('', [Validators.required, Validators.minLength(1)])
      })
    });
    this.productOwnerGroupLinks = {
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
      fifthGroup: this.freelancerFormsGroup.get('fifthStepFormGroup') as FormGroup,
    };
  }

  ngOnInit(): void {
    this.freelancerGroupLinks.firstGroup.controls.category.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value: string) => {
        this.subCategory = value;
        this.freelancerGroupLinks.firstGroup.controls.subcategory
          .setValue('');
      });
  }

  signUpFreelancer(): void {
    if (this.freelancerFormsGroup.valid) {
      this.authorizationData.signUpUser(this.freelancerFormsGroup.value);
    }
  }

  signUpProductOwner(): void {
    if (this.productOwnerFormsGroup.valid) {
      this.authorizationData.signUpUser(this.productOwnerFormsGroup.value);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
