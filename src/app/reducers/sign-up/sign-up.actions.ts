import { Action } from '@ngrx/store';

import { ISignUpState } from './sign-up.interfaces';

export enum signUpActionsType {
  setSignUpState = '[SIGNUP] setSignUpState',
  cleanSignUpState= '[SIGNUP] cleanSignUpState'
}

export class SetSignUpStateAction implements Action {
  readonly type = signUpActionsType.setSignUpState;

  constructor(public payload: { data: ISignUpState }) {
  }
}

export class CleanSignUpStateAction implements Action {
  readonly type = signUpActionsType.cleanSignUpState;

  constructor() {
  }
}

export type SignUpActions = SetSignUpStateAction | CleanSignUpStateAction;
