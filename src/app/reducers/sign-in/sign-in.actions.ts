import { Action } from '@ngrx/store';

import { ISignInState } from './sign-in.interfaces';

export enum signInActionsType {
  setSignInState = '[SIGNUP] setSignInState',
}

export class SetSignInStateAction implements Action {
  readonly type = signInActionsType.setSignInState;

  constructor(public payload: { data: ISignInState }) {
  }
}

export type SignInActions = SetSignInStateAction;
