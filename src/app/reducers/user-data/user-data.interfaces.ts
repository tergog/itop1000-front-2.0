export interface IUserDataState {
  personal: {
    photo: string;
    email: string;
    firstName: string;
    lastName: string;
    description: string;
    isWork: boolean;
    level: string;
    rate: number;
    phone: string;
  },
  skills: ISkillsData[];
  languages: ILanguagesData[];
  experiences: ISignUpExperience[];
  educations: IEducationData[];
}

export interface ISkillsData {
  name: string;
  mark: number;
}

export interface ILanguagesData {
  language: string;
  proficiency: string;
}

export interface IEducationData {
  id: 2,
  name: string;
  speciality: string;
  description: string;
  dateFrom: number;
  dateTill: number;
}

export interface ISignUpExperience {
  name: string;
  jobTitle: string;
  positionTitle: string;
  description: string;
  dateFrom: number;
  dateTill: number;
}
