import { IButtonParameters } from '../../../shared/custom-ui/button/button.interfaces';

export interface IModalAcceptRuleData {
  title: string;
  descriptions: IModalAcceptRuleItemDescription[];
  buttons: {
    decline: IButtonParameters,
    accept: IButtonParameters
  }
}

export interface IModalAcceptRuleItemDescription {
  title: string;
  description: string;
}
