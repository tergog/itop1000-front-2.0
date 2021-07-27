export interface ISignUpState {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  category?: string;
  subcategory?: string;
  skills?: string[];
  experience?: ISignUpExperience[];
  rate?: number;
}

export interface ISignUpExperience {
  companyName: string;
  jobTitle: string;
  positionTitle: string;
  jobDescription: string;
  dateFrom: number;
  dateTill: number;
}
