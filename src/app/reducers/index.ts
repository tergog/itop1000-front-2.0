import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { ISignUpState } from './sign-up/sign-up.interfaces';
import { signUpNode, signUpReducer } from './sign-up/sign-up.reducers';
import * as signUpSelector from './sign-up/sign-up.selectors';

export interface IState {
  [signUpNode]: ISignUpState;
}

export const reducers: ActionReducerMap<IState> = {
  [signUpNode]: signUpReducer,
};


export const getSignUpState = (state: IState): ISignUpState  => state[signUpNode];

// SignUp Selectors
export const getSignUpData = createSelector(
  getSignUpState,
  signUpSelector.selectSignUpData
);

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
