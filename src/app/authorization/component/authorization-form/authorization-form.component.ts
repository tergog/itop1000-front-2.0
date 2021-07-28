import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CAuthorizationData } from '../../../constantes/constantes';
import { ModalAcceptRuleComponent } from '../modal-accept-rule/modal-accept-rule.component';
import { EModalAcceptRuleView } from '../modal-accept-rule/modal-accept-rule.enums';
import { AuthorizationDataService } from '../../services/authorization-data/authorization-data.service';
import {
  confirmCheckboxValidator,
  confirmPasswordValidator
} from '../../services/authorization-validation/authorization-validation.service';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnInit, OnDestroy {

  public authorizationPageParameters = CAuthorizationData;
  public signUpFormGroup: FormGroup;
  public signInFormGroup: FormGroup;
  public validation: boolean;
  public EModalAcceptRuleView = EModalAcceptRuleView;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private authorizationData: AuthorizationDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.signUpFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      firstName: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      lastName: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      policy: this.formBuilder.control(false, [Validators.required]),
      terms: this.formBuilder.control(false, [Validators.required])
    }, {
      validator: [
        confirmPasswordValidator('password', 'confirmPassword'),
        confirmCheckboxValidator('policy'),
        confirmCheckboxValidator('terms')
      ]
    });
    this.signInFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      remember: this.formBuilder.control(false, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  signIn(): void {

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

  signUp(): void {
    if (this.signUpFormGroup.valid) {
      this.authorizationData.setSignUpData(this.signUpFormGroup.value);
      this.router.navigate(['/authorization/info']);
    } else {
      this.validation = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
