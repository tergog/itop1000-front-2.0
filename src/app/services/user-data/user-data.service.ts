import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { CApi } from 'src/app/constantes/constantes';
import { getUserData, IState } from '../../reducers';
import { EUserRole } from '../../enums/itop.enums';
import { IUserDataState } from '../../reducers/user-data/user-data.interfaces';
import { SetUserDataAction } from '../../reducers/user-data/user-data.actions';
import { takeUntil } from 'rxjs/operators';
import { IUserDataSecure } from './user-data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public userData$: Observable<IUserDataState> = this.store.select(getUserData);
  public userData: IUserDataState;

  constructor(
    private store: Store<IState>,
    private http: HttpClient
  ) {
    this.userData$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.userData = data);
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
    this.http.get(CApi.server + CApi.data.freelancer.home)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        this.setUserData(data);
      });
  }

  getProductOwnerData(): any {
    return this.http.get(CApi.server + CApi.data.freelancer.home)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        this.setUserData(data);
      });
  }

  setUserData(data: IUserDataState): void {
    this.store.dispatch(new SetUserDataAction({ data }));
  }

  getFreelancerSecureData(): Observable<IUserDataSecure> {
    return this.http.get<IUserDataSecure>(CApi.server + CApi.data.common.secure);
  }

  ngOnDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
