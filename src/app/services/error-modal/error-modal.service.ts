import { Injectable, OnDestroy } from '@angular/core';
import { EErrorModalContent, EErrorModalView } from './error-modal.enums';
import { BehaviorSubject, interval, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorModalService implements OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public EErrorModalView = EErrorModalView;
  public EErrorModalContent = EErrorModalContent;
  public errorModalView$: BehaviorSubject<string> = new BehaviorSubject<string>(EErrorModalView.Info);
  public errorModalContent$: BehaviorSubject<string> = new BehaviorSubject<string>(EErrorModalContent.ExistLanguage);
  public errorModalState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
    this.errorModalState$.pipe(takeUntil(this.unsubscribe$),
      switchMap(value => this.errorModalView$.pipe(map(view => {
        return { view, value };
      }))))
      .subscribe((modalState: { view: string, value: boolean }) => {
        if (modalState.value === true && modalState.view === EErrorModalView.Info) {
          // tslint:disable-next-line:typedef
          const timerId = setTimeout(() => {
            this.errorModalState$.next(false);
            clearTimeout(timerId);
          }, 3000);

        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
