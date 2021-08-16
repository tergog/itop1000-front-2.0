import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

import { SecurityPasswordStepperService } from '../../../../services/security-password-stepper/security-password-stepper.service';
import { CSecurityEditPasswordConfigList } from '../../security-edit-password.config';
import { takeUntil } from 'rxjs/operators';
import { PersonalSecurityService } from '../../../../services/personal-security/personal-security.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public step$: BehaviorSubject<number>;
  public securityEditConfig = CSecurityEditPasswordConfigList;
  public authenticationPasswordGroup: FormGroup;

  constructor(
    private securityPasswordStepperService: SecurityPasswordStepperService,
    public personalSecurityService: PersonalSecurityService
  ) {
    this.step$ = this.securityPasswordStepperService.editPasswordSteps$;
  }

  ngOnInit(): void {
    this.authenticationPasswordGroup = new FormGroup({
      secretKey: new FormControl('', [Validators.minLength(6)])
    });

    this.authenticationPasswordGroup.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(status => {
        if (status === 'VALID') {
          this.personalSecurityService.authenticationNewPassword(this.authenticationPasswordGroup.value)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res: { message: string }) => {
              if (res.message === 'ok') {
                this.securityPasswordStepperService.editPasswordSteps$.next(2);
              }
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
