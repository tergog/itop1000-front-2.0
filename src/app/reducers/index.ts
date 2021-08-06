import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { ISignUpState } from './sign-up/sign-up.interfaces';
import { IUserDataState } from './user-data/user-data.interfaces';
import { IStaticState } from './static/static.interfaces';

import { signUpNode, signUpReducer } from './sign-up/sign-up.reducers';
import { userDataNode, userDataReducer } from './user-data/user-data.reducers';
import { staticNode, staticReducer } from './static/static.reducers';

import * as signUpSelector from './sign-up/sign-up.selectors';
import * as userDataSelector from './user-data/user-data.selectors';
import * as staticDataSelector from './static/static.selectors';

export interface IState {
  [signUpNode]: ISignUpState;
  [userDataNode]: IUserDataState;
  [staticNode]: IStaticState
}

export const reducers: ActionReducerMap<IState> = {
  [signUpNode]: signUpReducer,
  [userDataNode]: userDataReducer,
  [staticNode]: staticReducer
};


export const getSignUpState = (state: IState): ISignUpState  => state[signUpNode];
export const getUserDataState = (state: IState): IUserDataState  => state[userDataNode];
export const getStaticDataState = (state: IState): IStaticState  => state[staticNode];

// SignUp Selectors
export const getSignUpData = createSelector(
  getSignUpState,
  signUpSelector.selectSignUpData
);

// UserData Selectors
export const getUserData = createSelector(
  getUserDataState,
  userDataSelector.selectUserData
);

// StaticData Selectors
export const getStaticData = createSelector(
  getStaticDataState,
  staticDataSelector.selectStaticData
);

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
