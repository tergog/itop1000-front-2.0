import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CApi } from '../../../../constantes/constantes';
import { IState } from '../../../../reducers';
import { ILanguagesData } from '../../../../reducers/user-data/user-data.interfaces';
import { AddNewLanguageAction, DeleteLanguageAction } from '../../../../reducers/user-data/user-data.actions';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private http: HttpClient,
    private store: Store<IState>
  ) {
  }

  addNewLanguage(languageData: ILanguagesData): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(CApi.server + CApi.data.common.language, { ...languageData });
  }

  addNewLanguageToStore(languageData: ILanguagesData): void {
    this.store.dispatch(new AddNewLanguageAction({ ...languageData }));
  }

  deleteLanguage(languageName: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(CApi.server + CApi.data.common.language + `/${ languageName }`, {});
  }

  deleteLanguageFromStore(index: number): void{
    this.store.dispatch(new DeleteLanguageAction({ index }));
  }
}
