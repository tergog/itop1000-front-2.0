import { IButtonParameters } from '../custom-ui/button/button.interfaces';
import { ISearchInputParameters } from '../material-ui/search-input/search-input.interfaces';
import { IInputParameters } from '../custom-ui/input/input.interfaces';
import { ISelectParameters } from '../material-ui/select/select.interfaces';

export interface IStepperParameters {
  type: string;
  selects: IStepperSelectsParameters;
  chipsValues: string[];
  inputs: IStepperInputsParameters;
  searchInputs: IStepperSearchInputsParameters;
  buttons: IStepperButtonsParameters;
}

export interface IStepperInputsParameters {
  [key: string]: IInputParameters;
}

export interface IStepperSearchInputsParameters {
  [key: string]: ISearchInputParameters;
}

export interface IStepperSelectsParameters {
  [key: string]: ISelectParameters;
}

export interface IStepperButtonsParameters {
  [key: string]: IButtonParameters;
}
