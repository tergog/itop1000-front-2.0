import { ICategoriesUser, IStaticState } from './static.interfaces';

export const selectStaticData = (state: IStaticState): IStaticState => state;
export const selectLanguagesData = (state: IStaticState): string[] => state.languages;
export const selectFreelancerCategoriesData = (state: IStaticState): string[] => state.categories.freelancer;
export const selectProductOwnerCategoriesData = (state: IStaticState): string[] => state.categories['product-owner'];
export const selectOperationsData = (state: IStaticState): string[] => state.operations;
export const selectSubCategoriesData = (state: IStaticState): ICategoriesUser => state.subcategories;
export const selectProficienciesData = (state: IStaticState): string[] => state.proficiencies;
export const selectCountriesData = (state: IStaticState): string[] => state.countries;
