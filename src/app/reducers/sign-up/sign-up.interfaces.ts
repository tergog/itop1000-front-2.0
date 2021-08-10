export interface ISignUpState {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  category?: string;
  subcategory?: string;
  skills?: string[];
  experiences?: ISignUpExperience[];
  rate?: number;
}

export interface ISignUpExperience {
  name: string;
  jobTitle: string;
  positionTitle: string;
  description: string;
  dateFrom: number;
  dateTill: number;
}
