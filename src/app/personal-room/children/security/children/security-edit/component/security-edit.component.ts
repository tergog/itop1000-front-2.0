import { Component, OnDestroy, OnInit } from '@angular/core';
import { CSecurityConfigList } from '../../../security.config';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { IUserDataState } from '../../../../../../reducers/user-data/user-data.interfaces';
import { UserDataService } from '../../../../../../services/user-data/user-data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-security-edit',
  templateUrl: './security-edit.component.html',
  styleUrls: ['./security-edit.component.scss']
})
export class SecurityEditComponent implements OnInit, OnDestroy {
  public unsubscribe$: Subject<void> = new Subject();
  public securityConfig = CSecurityConfigList;
  public securityEditGroup: FormGroup;
  public personalData$: Observable<IUserDataState> = this.userDataService.userData;
  public personalData: IUserDataState;

  constructor(private userDataService: UserDataService) {
    this.securityEditGroup = new FormGroup({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      age: new FormControl('', []),
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
        this.securityEditGroup.controls.age.setValue(data.personal.birth);
        this.securityEditGroup.controls.phone.setValue(data.personal.phone);
        this.securityEditGroup.controls.email.setValue(data.personal.email);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
