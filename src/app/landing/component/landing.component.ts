import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject, interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ILandingData } from '../landing.interfaces';
import { ELandingRole } from '../landing.enums';
import { ItopDataService } from '../../services/itop-data/itop-data.service';
import { animateText } from 'src/app/animations/animations';
import { EUserRole } from '../../enums/itop.enums';
import { CLandingConfigList } from '../landing.config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animateText]
})
export class LandingComponent {
  public userRole: string = localStorage.getItem('role') || EUserRole.Freelancer;
  public userRole$: BehaviorSubject<string> = this.itopDataService.userRole$;
  public landingData: ILandingData;
  public landingConfig: { [key: string]: ILandingData } = CLandingConfigList;
  public ELandingRole = ELandingRole;
  public loader = true;
  public loaderDisable$ = new Subject<void>();
  public loaderSubscription$: Subscription;
  public loaderTime = 0;

  constructor(
    private itopDataService: ItopDataService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.landingData = this.landingConfig[this.userRole];
    this.userRole$.pipe().subscribe(role => {
      this.landingData = this.landingConfig[role];
    });
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
}
