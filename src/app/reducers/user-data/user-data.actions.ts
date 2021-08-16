import { Action } from '@ngrx/store';

import { IUserDataState, IUserPersonalSecurityDataState } from './user-data.interfaces';

export enum userDataActionsType {
  setUserData = '[USERDATA] setUserData',
  editUserData = '[USERDATA] editUserData',
  editUserDescriptionData = '[USERDATA] editUserDescriptionData',
  cleanUserData = '[USERDATA] cleanUserData'
}

export class SetUserDataAction implements Action {
  readonly type = userDataActionsType.setUserData;

  constructor(public payload: { data: IUserDataState }) {
  }
}

export class EditUserDataAction implements Action {
  readonly type = userDataActionsType.editUserData;

  constructor(public payload: { data: IUserPersonalSecurityDataState }) {
  }
}

export class EditUserDescriptionDataAction implements Action {
  readonly type = userDataActionsType.editUserDescriptionData;

  constructor(public payload: { description: string }) {
  }
}

export class CleanUserDataAction implements Action {
  readonly type = userDataActionsType.cleanUserData;

  constructor() {
  }
}

export type UserDataActions = SetUserDataAction | EditUserDataAction | CleanUserDataAction | EditUserDescriptionDataAction;
