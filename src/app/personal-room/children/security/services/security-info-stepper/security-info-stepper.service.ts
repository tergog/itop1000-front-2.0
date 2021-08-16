import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IUserPersonalSecurityDataState } from '../../../../../reducers/user-data/user-data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SecurityInfoStepperService implements OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public editInfoSteps$: BehaviorSubject<number> = new BehaviorSubject(0);
  public editInfoData$ = new BehaviorSubject<IUserPersonalSecurityDataState | null>(null);
  public editInfoData: IUserPersonalSecurityDataState | null = null;

  constructor() {
    this.editInfoData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: IUserPersonalSecurityDataState | null) => this.editInfoData = data);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
