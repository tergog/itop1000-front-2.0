import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CApi } from '../../constantes/constantes';
import { IState } from '../../reducers';
import { SetStaticDataStateAction } from '../../reducers/static/static.actions';
import { EUserRole } from '../../enums/itop.enums';

@Injectable({
  providedIn: 'root'
})
export class ItopDataService implements OnDestroy {
  public userRole$: BehaviorSubject<string>
    = new BehaviorSubject<string>(localStorage.getItem('role') || EUserRole.Freelancer);
  public unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<IState>,
    private http: HttpClient
  ) {
  }

  getStaticData(): void {
    this.http.get(CApi.server + CApi.static)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => this.setStaticData(data));
  }

  setStaticData(data: any): void {
    this.store.dispatch(new SetStaticDataStateAction({ data }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
