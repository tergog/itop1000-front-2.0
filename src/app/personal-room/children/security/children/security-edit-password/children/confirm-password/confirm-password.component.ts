import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SecurityPasswordStepperService } from '../../../../services/security-password-stepper/security-password-stepper.service';
import { CSecurityEditPasswordConfigList } from '../../security-edit-password.config';
import { PersonalSecurityService } from '../../../../services/personal-security/personal-security.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public step$: BehaviorSubject<number>;
  public securityEditConfig = CSecurityEditPasswordConfigList;
  public confirmPasswordGroup: FormGroup;

  constructor(
    private securityPasswordStepperService: SecurityPasswordStepperService,
    public router: Router,
    public personalSecurityService: PersonalSecurityService
  ) {}

  ngOnInit(): void {
    this.confirmPasswordGroup = new FormGroup({
      currentPassword: new FormControl(''),
      newPassword: new FormControl('')
    });
  }

  cancelChangePassword(): void {
    this.router.navigate(['/personal-room/security']);
  }

  onSubmit(): void {
    const statusForm = this.confirmPasswordGroup.valid;
    if (statusForm) {
      this.personalSecurityService.setNewPassword(this.confirmPasswordGroup.value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res: { message: string }) => {
          if (res.message === 'ok') {
            this.securityPasswordStepperService.editPasswordSteps$.next(1);
          }
        });
    }
  }
}
