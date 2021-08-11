import { IButtonParameters } from '../custom-ui/button/button.interfaces';
import { ISearchInputParameters } from '../material-ui/search-input/search-input.interfaces';
import { IInputParameters } from '../custom-ui/input/input.interfaces';
import { ISelectParameters } from '../material-ui/select/select.interfaces';

export interface IStepperData {
  name?: string;
  description: string;
  category: string;
  subcategory?: string;
  skills?: string[];
  experiences?: IExperienceData[];
  rate?: string;
  location?: string;
  operationMode?: string;
}

export interface ITransformStepperData {
  name?: string;
  description: string;
  category: string;
  subcategory?: string;
  skills?: string[];
  experiences?: IExperienceData[];
  rate?: number;
  location?: string;
  operationMode?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
}

export interface IExperienceData {
  name: string;
  jobTitle: string;
  positionTitle: string;
  description: string;
  dateFrom: number;
  dateTill: number;
}

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
