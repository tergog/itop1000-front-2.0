import { Action } from '@ngrx/store';

import { SignUpActions, signUpActionsType } from './sign-up.actions';
import { ISignUpState } from './sign-up.interfaces';

export const signUpNode = 'signUp';

const signUpState: ISignUpState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  category: '',
  subcategory: '',
  skills: [],
  experiences: [],
  rate: 0
};

export const signUpReducer = (state = signUpState, action: Action): ISignUpState => {
  const signUpActions = action as SignUpActions;
  switch (signUpActions.type) {
    case signUpActionsType.setSignUpState:
      return {
        ...state,
        ...signUpActions.payload.data
      };
    case signUpActionsType.editSignUpState:
      return {
        ...state
      };
    default:
      return state;
  }
};
