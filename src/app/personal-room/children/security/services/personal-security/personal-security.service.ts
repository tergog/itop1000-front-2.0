import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CApi } from '../../../../../constantes/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalSecurityService {

  constructor(
    private http: HttpClient
  ) {
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
