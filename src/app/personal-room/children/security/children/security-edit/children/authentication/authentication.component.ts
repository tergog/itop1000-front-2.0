import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { PersonalSecurityService } from '../../../../services/personal-security/personal-security.service';
import { SecurityInfoStepperService } from '../../../../services/security-info-stepper/security-info-stepper.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public step$: BehaviorSubject<number>;
  public authenticationInfoGroup: FormGroup;

  constructor(
    private securityInfoStepperService: SecurityInfoStepperService,
    public personalSecurityService: PersonalSecurityService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.authenticationInfoGroup = new FormGroup({
      secretKey: new FormControl('', [Validators.minLength(6)])
    });

    this.authenticationInfoGroup.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(status => {
        if (status === 'VALID') {
          this.personalSecurityService.authenticationNewInfo(this.authenticationInfoGroup.value)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res: { message: string }) => {
              if (res.message === 'ok') {
                const newInfo = this.securityInfoStepperService.editInfoData!;
                this.personalSecurityService.setNewInfoToStore(newInfo);
                this.securityInfoStepperService.editInfoSteps$.next(0);
                this.securityInfoStepperService.editInfoData$.next(null);
                this.router.navigate(['/personal-room/home']);
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




