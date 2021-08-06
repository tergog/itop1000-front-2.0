import { Action } from '@ngrx/store';

import { StaticActions, staticActionsType } from './static.actions';
import { IStaticState } from './static.interfaces';

export const staticNode = 'static';

const signUpState: IStaticState = {
  email: '',
};

export const staticReducer = (state = signUpState, action: Action): IStaticState => {
  const signUpActions = action as StaticActions;
  switch (signUpActions.type) {
    case staticActionsType.setStaticState:
      return {
        ...state,
        ...signUpActions.payload.data
      };
    default:
      return state;
  }
};
