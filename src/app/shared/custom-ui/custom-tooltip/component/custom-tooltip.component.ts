import { Component, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { CustomTooltipModalRequirementsComponent } from './custom-tooltip-modal-requirements/custom-tooltip-modal-requirements.component';

@Component({
  selector: 'app-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CustomTooltipComponent implements OnDestroy {
  @Input() tooltipParameters: {text: string, link: string} = { text: '', link: '' };
  public unsubscribe$ = new Subject<void>();
  constructor( private dialog: MatDialog) { }

  openRequirementsModal(): void {
    this.dialog.open(CustomTooltipModalRequirementsComponent);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
