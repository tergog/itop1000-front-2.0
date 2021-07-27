import { Component, OnDestroy, OnInit } from '@angular/core';
import { CAuthorizationData } from '../../../constantes/constantes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ModalAcceptRuleComponent } from '../modal-accept-rule/modal-accept-rule.component';
import { EModalAcceptRuleView } from '../modal-accept-rule/modal-accept-rule.enums';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnInit, OnDestroy {

  public authorizationPageParameters = CAuthorizationData;
  public signUpFormGroup: FormGroup;
  public signInFormGroup: FormGroup;
  public invalid: boolean;
  public EModalAcceptRuleView = EModalAcceptRuleView;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.signUpFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      firstName: this.formBuilder.control('', [Validators.required]),
      lastName: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
      policy: this.formBuilder.control(false, [Validators.required]),
      terms: this.formBuilder.control(false, [Validators.required])
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
      this.router.navigate(['/authorization/info']);
    } else {
      this.invalid = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
