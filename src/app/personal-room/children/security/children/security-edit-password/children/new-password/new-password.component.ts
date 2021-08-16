import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

import { SecurityPasswordStepperService } from '../../../../services/security-password-stepper/security-password-stepper.service';
import { CSecurityEditPasswordConfigList } from '../../security-edit-password.config';
import { PersonalSecurityService } from '../../../../services/personal-security/personal-security.service';
import {
  confirmPasswordValidator,
  passwordMatchValidator
} from '../../../../../../../authorization/services/authorization-validation/authorization-validation.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit, OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public step$: BehaviorSubject<number>;
  public securityEditConfig = CSecurityEditPasswordConfigList;
  public newPasswordGroup: FormGroup;

  constructor(
    private securityPasswordStepperService: SecurityPasswordStepperService,
    public router: Router,
    public personalSecurityService: PersonalSecurityService
  ) {
    this.step$ = this.securityPasswordStepperService.editPasswordSteps$;
  }

  ngOnInit(): void {
    this.newPasswordGroup = new FormGroup({
      newPassword: new FormControl(''),
      confirmPassword: new FormControl('', [passwordMatchValidator('newPassword')])
    });
  }

  confirmNewPassword(): void {
    const statusForm = this.newPasswordGroup.valid;
    if (statusForm) {
      this.personalSecurityService.confirmNewPassword(this.newPasswordGroup.value.newPassword)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res: { message: string }) => {
          if (res.message === 'ok') {
            this.router.navigate(['/personal-room/security']);
          }
        });
    }
  }

  cancelChangePassword(): void {
    this.router.navigate(['/personal-room/security']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
