import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { ELandingRole } from '../../landing/landing.enums';
import { ILandingData } from '../../landing/landing.interfaces';
import { CApi, CLandingData, CStepperData } from '../../constantes/constantes';
import { IStepperParameters } from '../../shared/stepper/stepper.interfaces';
import { IState } from '../../reducers';
import { SetStaticDataStateAction } from '../../reducers/static/static.actions';

@Injectable({
  providedIn: 'root'
})
export class ItopDataService implements OnDestroy {
  public landingData = CLandingData;
  public stepperData = CStepperData;
  public userRole$: BehaviorSubject<string>;
  public landingPageData$: BehaviorSubject<ILandingData>;
  public stepperPageData$: BehaviorSubject<IStepperParameters>;
  public unsubscribe$: Subject<void>;

  constructor(
    private store: Store<IState>,
    private http: HttpClient
  ) {
    this.unsubscribe$ = new Subject<void>();
    this.userRole$ = new BehaviorSubject<string>(ELandingRole.Freelancer);
    this.landingPageData$ = new BehaviorSubject<ILandingData>(this.landingData[ELandingRole.Freelancer]);
    this.stepperPageData$ = new BehaviorSubject<IStepperParameters>(this.stepperData[ELandingRole.Freelancer]);
    this.userRole$.pipe(takeUntil(this.unsubscribe$)).subscribe((role: string) => {
      // @ts-ignore
      this.landingPageData$.next(this.landingData[role]);
      // @ts-ignore
      this.stepperPageData$.next(this.stepperData[role]);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getStaticData(): void {
    this.http.get(CApi.server + CApi.static).pipe().subscribe(data => this.setStaticData(data));
  }

  setStaticData(data: any): void {
    this.store.dispatch(new SetStaticDataStateAction({ data }));
  }
}
