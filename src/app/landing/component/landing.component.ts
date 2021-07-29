import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject, Subscription } from 'rxjs';

import { ILandingData } from '../landing.interfaces';
import { ELandingRole } from '../landing.enums';
import { ItopDataService } from '../../services/itop-data/itop-data.service';
import { animateText } from 'src/app/animations/animations';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animateText]
})
export class LandingComponent implements OnInit, AfterViewInit {
  public landingData$: BehaviorSubject<ILandingData>;
  public ELandingRole = ELandingRole;
  public loader = true;
  public loaderDisable$ = new Subject<void>();
  public loaderSubscription$: Subscription;
  public loaderTime = 0;

  constructor(
    private landingPageData: ItopDataService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.landingData$ = landingPageData.landingPageData$;
    this.loaderSubscription$ = interval(1000)
      .pipe(takeUntil(this.loaderDisable$))
      .subscribe(time => {
        console.log(time);
        if (time >= 2) {
          this.loader = false;
          this.loaderDisable$.next();
          this.loaderDisable$.complete();
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

}
