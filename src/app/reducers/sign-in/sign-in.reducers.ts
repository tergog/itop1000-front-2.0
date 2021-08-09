import { Action } from '@ngrx/store';

import { SignInActions, signInActionsType } from './sign-in.actions';
import { ISignInState } from './sign-in.interfaces';

export const signInNode = 'signIn';

const signInState: ISignInState = {
  qrCode: '',
  token: ''
};

export const signInReducer = (state = signInState, action: Action): ISignInState => {
  const signInActions = action as SignInActions;
  switch (signInActions.type) {
    case signInActionsType.setSignInState:
      return {
        ...state,
        ... signInActions.payload.data
      };
    default:
      return state;
  }
};
