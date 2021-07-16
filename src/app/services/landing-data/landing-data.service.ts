import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { ELandingRole } from '../../landing/landing.enums';
import { ILandingData } from '../../landing/landing.interfaces';
import { CLandingData } from '../../constantes/constantes';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingDataService implements OnDestroy {
  public landingData = CLandingData;
  public landingRole$: BehaviorSubject<string>;
  public landingPageData$: BehaviorSubject<ILandingData>;
  public unsubscribe$: Subject<void>;

  constructor() {
    this.unsubscribe$ = new Subject<void>();
    this.landingRole$ = new BehaviorSubject<string>(ELandingRole.Freelancer);
    this.landingPageData$ = new BehaviorSubject<ILandingData>(this.landingData[ELandingRole.Freelancer]);
    this.landingRole$.pipe(takeUntil(this.unsubscribe$)).subscribe((role: string) => {
      // @ts-ignore
      this.landingPageData$.next(this.landingData[role]);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
