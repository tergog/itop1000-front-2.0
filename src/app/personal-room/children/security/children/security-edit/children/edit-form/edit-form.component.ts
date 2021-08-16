import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CSecurityConfigList } from '../../../../security.config';
import { IUserDataState, IUserPersonalSecurityDataState } from '../../../../../../../reducers/user-data/user-data.interfaces';
import { UserDataService } from '../../../../../../../services/user-data/user-data.service';
import { SecurityInfoStepperService } from '../../../../services/security-info-stepper/security-info-stepper.service';
import { PersonalSecurityService } from '../../../../services/personal-security/personal-security.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit, OnDestroy {
  public unsubscribe$: Subject<void> = new Subject();
  public securityConfig = CSecurityConfigList;
  public securityEditGroup: FormGroup;
  public personalData$: Observable<IUserDataState> = this.userDataService.userData;
  public personalData: IUserDataState;

  constructor(
    private userDataService: UserDataService,
    private securityInfoStepperService: SecurityInfoStepperService,
    private personalSecurityService: PersonalSecurityService
  ) {
    this.securityEditGroup = new FormGroup({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      birth: new FormControl('', []),
      phone: new FormControl('', []),
      email: new FormControl('', []),
    });
  }

  ngOnInit(): void {
    this.personalData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: IUserDataState) => {
        this.securityEditGroup.controls.firstName.setValue(data.personal.firstName);
        this.securityEditGroup.controls.lastName.setValue(data.personal.lastName);
        this.securityEditGroup.controls.birth.setValue(data.personal.birth);
        this.securityEditGroup.controls.phone.setValue(data.personal.phone);
        this.securityEditGroup.controls.email.setValue(data.personal.email);
      });
  }

  onSubmit(): void {
    const statusForm = this.securityEditGroup.valid;
    const formValue: IUserPersonalSecurityDataState = this.securityEditGroup.value;
    if (statusForm) {
      this.personalSecurityService.setNewInfo(formValue)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res: { message: string }) => {
          if (res.message === 'ok') {
            // @ts-ignore
            this.securityInfoStepperService.editInfoData$.next(formValue);
            this.securityInfoStepperService.editInfoSteps$.next(1);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
