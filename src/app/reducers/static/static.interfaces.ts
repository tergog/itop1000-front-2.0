import { EUserRole } from '../../enums/itop.enums';

export interface IStaticState {
  categories: ICategoriesUser;
  subcategories: ICategoriesUser;
  countries: string[];
  languages: string[];
  operations: string[];
  proficiencies: string[];
}

export interface ICategoriesUser {
  [key: string]: string[];
}
