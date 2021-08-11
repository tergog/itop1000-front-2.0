import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ModalAcceptRuleComponent } from '../../modal-accept-rule/component/modal-accept-rule.component';
import { EModalAcceptRuleView } from '../../modal-accept-rule/modal-accept-rule.enums';
import { AuthorizationService } from '../../../services/authorization/authorization.service';
import { confirmCheckboxValidator } from '../../../services/authorization-validation/authorization-validation.service';
import { CAuthorizationFormConfigList } from '../authorization-form.config';
import { ModalSelectRoleComponent } from '../../modal-select-role/component/modal-select-role.component';

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
  public authorizationPageParameters = CAuthorizationFormConfigList;
  public signUpFormGroup: FormGroup;
  public signInFormGroup: FormGroup;
  public signUpValidation: boolean;
  public signInValidation: boolean;
  public EModalAcceptRuleView = EModalAcceptRuleView;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.signUpFormGroup = new FormGroup({
      email: new FormControl('user3@gmail.com', [Validators.required, Validators.email]),
      firstName: new FormControl('User', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('User', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('222333', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('+380888888888', [Validators.required, Validators.minLength(6)]),
      policy: new FormControl(true, [Validators.required]),
      terms: new FormControl(true, [Validators.required])
    }, {
      validators: [
        // confirmCheckboxValidator('policy'),
        // confirmCheckboxValidator('terms')
      ]
    });
    this.signInFormGroup = new FormGroup({
      email: new FormControl('user@gmail.com', [Validators.required]),
      password: new FormControl('lslslslsls', [Validators.required, Validators.minLength(6)])
    });

    this.openDialog();
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
      this.authorizationService.loginUser(this.signInFormGroup.value);
      this.router.navigate(['/authorization/authentication']);
    } else {
      this.signInValidation = true;
    }
  }

  signUp(): void {
    if (this.signUpFormGroup.valid) {
      this.authorizationService.setSignUpData(this.signUpFormGroup.value);
      this.router.navigate(['/authorization/info']);
    } else {
      this.signUpValidation = true;
      this.tooltipParameters.status = true;
    }
  }

  openDialog(): void {
    this.dialog.open(ModalSelectRoleComponent);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
