import { Action } from '@ngrx/store';

import { IStaticState } from './static.interfaces';

export enum staticActionsType {
  setStaticState = '[STATIC] setStaticState'
}

export class SetStaticDataStateAction implements Action {
  readonly type = staticActionsType.setStaticState;

  constructor(public payload: { data: IStaticState }) {
  }
}

export type StaticActions = SetStaticDataStateAction;
