import { Action } from '@ngrx/store';

import { IUserDataState } from './user-data.interfaces';

export enum userDataActionsType {
  setUserData = '[USERDATA] setUserData',
  editUserData = '[USERDATA] editUserData',
  cleanUserData = '[USERDATA] cleanUserData'
}

export class SetUserDataAction implements Action {
  readonly type = userDataActionsType.setUserData;

  constructor(public payload: { data: IUserDataState }) {
  }
}

export class EditUserDataAction implements Action {
  readonly type = userDataActionsType.editUserData;

  constructor(public payload: { value: string }) {
  }
}

export class CleanUserDataAction implements Action {
  readonly type = userDataActionsType.cleanUserData;

  constructor() {
  }
}

export type UserDataActions = SetUserDataAction | EditUserDataAction | CleanUserDataAction;
