import { Action } from '@ngrx/store';

import { ILanguagesData, IUserDataState, IUserPersonalSecurityDataState } from './user-data.interfaces';

export enum userDataActionsType {
  setUserData = '[USERDATA] setUserData',
  editUserData = '[USERDATA] editUserData',
  editUserDescriptionData = '[USERDATA] editUserDescriptionData',
  addNewLanguage = '[USERDATA] addNewLanguage',
  deleteLanguage = '[USERDATA] deleteLanguage',
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

export class AddNewLanguageAction implements Action {
  readonly type = userDataActionsType.addNewLanguage;

  constructor(public payload: ILanguagesData) {
  }
}

export class DeleteLanguageAction implements Action {
  readonly type = userDataActionsType.deleteLanguage;

  constructor(public payload: { index: number }) {
  }
}

export type UserDataActions = SetUserDataAction |
  EditUserDataAction |
  CleanUserDataAction |
  EditUserDescriptionDataAction |
  DeleteLanguageAction |
  AddNewLanguageAction;
