import { Action } from '@ngrx/store';

import { ISignUpState } from './sign-up.interfaces';

export enum signUpActionsType {
  setSignUpState = '[SIGNUP] setSignUpState',
  editSignUpState= '[SIGNUP] editSignUpState'
}

export class SetSignUpStateAction implements Action {
  readonly type = signUpActionsType.setSignUpState;

  constructor(public payload: { data: ISignUpState }) {
  }
}

export class EditSignUpAction implements Action {
  readonly type = signUpActionsType.editSignUpState;

  constructor(public payload: { value: string }) {
  }
}

export type SignUpActions = SetSignUpStateAction | EditSignUpAction;
