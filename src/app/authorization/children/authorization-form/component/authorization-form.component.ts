import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ModalAcceptRuleComponent } from '../../modal-accept-rule/component/modal-accept-rule.component';
import { EModalAcceptRuleView } from '../../modal-accept-rule/modal-accept-rule.enums';
import { AuthorizationDataService } from '../../../services/authorization-data/authorization-data.service';
import {
  confirmCheckboxValidator,
  confirmPasswordValidator
} from '../../../services/authorization-validation/authorization-validation.service';
import { CAuthorizatioConfigList } from '../authorization-form.config';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnDestroy {

  public tooltipParameters = {
    text: 'There is a mistake, please, check and enter the correct data',
    link: 'Email address validation requirements',
    status: false
  };
  public authorizationPageParameters = CAuthorizatioConfigList;
  public signUpFormGroup: FormGroup;
  public signInFormGroup: FormGroup;
  public signUpValidation: boolean;
  public signInValidation: boolean;
  public EModalAcceptRuleView = EModalAcceptRuleView;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private authorizationData: AuthorizationDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.signUpFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('user3@gmail.com', [Validators.required, Validators.email]),
      firstName: this.formBuilder.control('User', [Validators.required, Validators.minLength(2)]),
      lastName: this.formBuilder.control('User', [Validators.required, Validators.minLength(2)]),
      password: this.formBuilder.control('222333', [Validators.required, Validators.minLength(6)]),
      phone: this.formBuilder.control('+380888888888', [Validators.required, Validators.minLength(6)]),
      policy: this.formBuilder.control(true, [Validators.required]),
      terms: this.formBuilder.control(true, [Validators.required])
    }, {
      validator: [
        // confirmPasswordValidator('password', 'confirmPassword'),
        confirmCheckboxValidator('policy'),
        confirmCheckboxValidator('terms')
      ]
    });
    this.signInFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('user@gmail.com', [Validators.required]),
      password: this.formBuilder.control('lslslslsls', [Validators.required, Validators.minLength(6)]),
      remember: this.formBuilder.control(false, [Validators.required])
    });
  }

  openAcceptRuleDialog(event: any, view: string): void {
    event.preventDefault();
    this.dialog.open(ModalAcceptRuleComponent, {
        data: view
      }
    ).afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: boolean) => {
        if (view === EModalAcceptRuleView.PrivacyPolicy) {
          this.signUpFormGroup.controls.policy.setValue(result);
        } else {
          this.signUpFormGroup.controls.terms.setValue(result);
        }
      });
  }

  signIn(): void {
    if (this.signInFormGroup.valid) {
      this.authorizationData.setSignInData(this.signInFormGroup.value);
      this.router.navigate(['/authorization/authentication']);
    } else {
      this.signInValidation = true;
    }
  }

  signUp(): void {
    if (this.signUpFormGroup.valid) {
      this.authorizationData.setSignUpData(this.signUpFormGroup.value);
      this.router.navigate(['/authorization/info']);
    } else {
      this.signUpValidation = true;
      this.tooltipParameters.status = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
