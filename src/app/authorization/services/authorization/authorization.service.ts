import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { getSignUpData, IState } from '../../../reducers';
import { CleanSignUpStateAction, SetSignUpStateAction } from '../../../reducers/sign-up/sign-up.actions';
import { ISignUpState } from '../../../reducers/sign-up/sign-up.interfaces';
import { CApi } from '../../../constantes/constantes';
import { SetSignInStateAction } from '../../../reducers/sign-in/sign-in.actions';
import { CleanUserDataAction } from '../../../reducers/user-data/user-data.actions';
import { IStepperData, ITransformStepperData } from '../../../shared/stepper/stepper.interfaces';
import { EUserRole } from '../../../enums/itop.enums';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements OnDestroy {
  public userData$ = this.store.select(getSignUpData);
  public userData: any;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<IState>
  ) {
    this.userData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => this.userData = data);
  }

  setSignUpData(signUpData: ISignUpState): void {
    const { email, firstName, lastName, password, phone } = signUpData;
    const data = { email, firstName, lastName, password, phone };
    this.store.dispatch(new SetSignUpStateAction({ data }));
  }

  setGoogleSignInData(data: { authCode: string }): void {
    this.http.post<{ role: string }>(CApi.server + CApi.auth.signIn.google, { secretKey: data.authCode })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res): void => {
          if (res.role) {
            localStorage.setItem('role', res.role);
            this.router.navigate(['/personal-room']);
          }
        }
      );
  }

  loginUser(signInData: { email: string, password: string }): void {
    const { email, password } = signInData;
    this.http.post<{ qrCode?: string, token: string }>(CApi.server + CApi.auth.signIn.default, { email, password })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res): void => {
        if (res.qrCode) {
          this.store.dispatch(new SetSignInStateAction({ data: { qrCode: res.qrCode, token: res.token } }));
          localStorage.setItem('token', res.token);
          this.router.navigate(['/authorization/qr-code']);
        } else {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/authorization/authentication']);
        }
      });
  }

  signUpUser(stepperData: IStepperData): void {
    const data = this.transformStepperData(stepperData);
    let userRole: string = localStorage.getItem('role') || EUserRole.Freelancer;
    this.store.dispatch(new CleanSignUpStateAction());
    // @ts-ignore
    this.http.post<{ token: string, role: string }>(CApi.server + CApi.auth.register[userRole], { ...data })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res): void => {
        if (res.role) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          this.router.navigate(['/personal-room']);
        }
      });
  }

  transformStepperData(stepperData: IStepperData): ITransformStepperData {
    const transformStepperData = Object.values(stepperData)
      .reduce((acc: IStepperData, item: any) => (acc = { ...acc, ...item }, acc), {} as IStepperData);
    let { rate }: any = stepperData;
    rate = Number(rate);
    return rate ? {
      ...this.userData,
      ...transformStepperData,
      rate
    } : {
      ...this.userData,
      ...transformStepperData
    };
  }

  logout(): void {
    localStorage.clear();
    this.store.dispatch(new CleanUserDataAction());
    this.http.post(CApi.server + CApi.auth.logout, {});
    this.router.navigate(['/authorization']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
