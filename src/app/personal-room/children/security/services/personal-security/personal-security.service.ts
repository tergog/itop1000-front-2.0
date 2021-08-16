import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CApi } from '../../../../../constantes/constantes';
import { Observable } from 'rxjs';
import { IUserDataSecure, IUserDataSecureEdit } from '../../../../../services/user-data/user-data.interfaces';
import { Store } from '@ngrx/store';
import { IState } from '../../../../../reducers';
import { EditUserDataAction } from '../../../../../reducers/user-data/user-data.actions';
import { IUserPersonalSecurityDataState } from '../../../../../reducers/user-data/user-data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonalSecurityService {

  constructor(
    private http: HttpClient,
    private store: Store<IState>
  ) {
  }

  setNewInfo(data: IUserDataSecureEdit): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      CApi.server + CApi.data.common.info, { ...data });
  }

  authenticationNewInfo(data: { secretKey: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      CApi.server + CApi.data.common.authInfo,
      {
        secretKey: data.secretKey
      });
  }

  setNewInfoToStore(data: IUserPersonalSecurityDataState): void {
    this.store.dispatch(new EditUserDataAction({ data }));
  }

  setNewPassword(data: { currentPassword: string, newPassword: string }): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      CApi.server + CApi.data.common.password,
      {
        current: data.currentPassword,
        new: data.newPassword
      });
  }

  authenticationNewPassword(data: { secretKey: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      CApi.server + CApi.data.common.authPassword,
      {
        secretKey: data.secretKey
      });
  }

  confirmNewPassword(password: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      CApi.server + CApi.data.common.confirmPassword, { password });
  }
}
