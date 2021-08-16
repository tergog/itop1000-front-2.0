import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CApi } from '../../../constantes/constantes';
import { EUserRole } from '../../../enums/itop.enums';
import { Store } from '@ngrx/store';
import { IState } from '../../../reducers';
import { EditUserDataAction, EditUserDescriptionDataAction } from '../../../reducers/user-data/user-data.actions';

@Injectable({
  providedIn: 'root'
})
export class PersonalRoomService {

  constructor(
    private http: HttpClient,
    private store: Store<IState>
  ) {
  }


  setNewDescription(description: string): Observable<{ message: string }> {
    const role: string = localStorage.getItem('role') || EUserRole.Freelancer;
    // @ts-ignore
    return this.http.put<{ message: string }>(CApi.server + CApi.data[role].description, { description });
  }

  setNewDescriptionToStore(description: string): void {
    this.store.dispatch(new EditUserDescriptionDataAction({ description }));
  }
}
