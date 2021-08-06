import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { CApi } from 'src/app/constantes/constantes';
import { IState } from '../../reducers';
import { EUserRole } from '../../enums/itop.enums';
import { IUserDataState } from '../../reducers/user-data/user-data.interfaces';
import { SetUserDataAction } from '../../reducers/user-data/user-data.actions';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private store: Store<IState>,
    private http: HttpClient
  ) {

  }

  getUserData(role: string): any {
    switch (role) {
      case EUserRole.Freelancer:
        this.getFreelancerData();
        break;
      case EUserRole.ProductOwner:
        this.getProductOwnerData();
        break;
      default:
        this.getFreelancerData();
    }
  }

  getFreelancerData(): void {
    this.http.get(CApi.server + CApi.data.freelancer.home).pipe().subscribe((data: any) => {
      console.log(data);
      this.setUserData(data);
    });
  }

  getProductOwnerData(): any {
    return this.http.get(CApi.server + CApi.data.freelancer.home).pipe().subscribe((data: any) => {
      console.log(data);
      this.setUserData(data);
    });
  }

  setUserData(data: IUserDataState): void {
    this.store.dispatch(new SetUserDataAction({ data }));
  }
}
