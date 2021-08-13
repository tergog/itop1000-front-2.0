import { Action } from '@ngrx/store';

import { UserDataActions, userDataActionsType } from './user-data.actions';
import { IUserDataState } from './user-data.interfaces';

export const userDataNode = 'userData';

const signUpState: IUserDataState = {
  personal: {
    photo: '',
    email: '',
    firstName: '',
    lastName: '',
    description: '',
    isWork: false,
    phone: '',
    level: '',
    rate: 0,
    birth: 0
  },
  skills: [],
  languages: [],
  experiences: [],
  educations: []
};

export const userDataReducer = (state = signUpState, action: Action): IUserDataState => {
  const userDataActions = action as UserDataActions;
  switch (userDataActions.type) {
    case userDataActionsType.setUserData:
      return {
        ...state,
        ...userDataActions.payload.data
      };
    case userDataActionsType.editUserData:
      return {
        ...state
      };
    case userDataActionsType.cleanUserData:
      return {
        personal: {
          photo: '',
          email: '',
          firstName: '',
          lastName: '',
          description: '',
          isWork: false,
          phone: '',
          level: '',
          rate: 0,
          birth: 0
        },
        skills: [],
        languages: [],
        experiences: [],
        educations: []
      };
    default:
      return state;
  }
};
