import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSignUpData, IState } from '../../../reducers';
import { SetSignUpStateAction } from '../../../reducers/sign-up/sign-up.actions';
import { ISignUpState } from '../../../reducers/sign-up/sign-up.interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDataService implements OnDestroy {
  public userData$ = this.store.select(getSignUpData);
  public userData: any;
  public unsubscribe$ = new Subject<void>();

  constructor(private store: Store<IState>) {
    this.userData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => this.userData = data);
  }

  setSignUpData(signUpData: ISignUpState): void {
    const { email, password, lastName, firstName } = signUpData;
    const data = { email, password, lastName, firstName };
    this.store.dispatch(new SetSignUpStateAction({ data }));
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
