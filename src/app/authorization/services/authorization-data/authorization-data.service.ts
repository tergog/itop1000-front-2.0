import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../../../reducers';
import { SetSignUpStateAction } from '../../../reducers/sign-up/sign-up.actions';
import { ISignUpState } from '../../../reducers/sign-up/sign-up.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDataService {

  constructor(private store: Store<IState>) {
  }

  setData(signUpData: ISignUpState): void {
    const { email, password, lastName, firstName } = signUpData;
    const data = { email, password, lastName, firstName };
    this.store.dispatch(new SetSignUpStateAction({ data }));
  }
}
