import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { getSignUpData, IState } from '../../../reducers';
import { SetSignUpStateAction } from '../../../reducers/sign-up/sign-up.actions';
import { ISignUpState } from '../../../reducers/sign-up/sign-up.interfaces';
import { CApi } from '../../../constantes/constantes';
import { SetSignInStateAction } from '../../../reducers/sign-in/sign-in.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDataService implements OnDestroy {
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
    const { email, password, lastName, firstName } = signUpData;
    const data = { email, password, lastName, firstName };
    this.store.dispatch(new SetSignUpStateAction({ data }));
  }

  setGoogleSignInData(data: { authCode: string }): void {
    this.http.post(CApi.server + CApi.auth.signIn.google, { secretKey: data.authCode })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: any) => {
          if (res.role) {
            localStorage.setItem('role', res.role);
            this.router.navigate(['/personal-room']);
          }
        }
      );
  }

  setSignInData(signInData: { email: string, password: string }): void {
    const { email, password } = signInData;
    this.http.post(CApi.server + CApi.auth.signIn.default, { email, password })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: any): void => {
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

  setStepperData(stepperData: any): void {
    stepperData = Object.values(stepperData)
      .reduce((acc: ISignUpState, item: any) => (acc = { ...acc, ...item }, acc), {} as ISignUpState);
    let { rate } = stepperData;
    rate = Number(rate);
    const data = {
      ...this.userData,
      ...stepperData,
      rate
    };
    console.log(data);
    // const { email, password, lastName, firstName } = signUpData;
    // const data = { email, password, lastName, firstName };
    // this.store.dispatch(new SetSignUpStateAction({ data }));
  }

  signUpUser(): Promise<{ status: boolean }> {
    return new Promise(((resolve, reject) => {
      resolve({ status: true });
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
