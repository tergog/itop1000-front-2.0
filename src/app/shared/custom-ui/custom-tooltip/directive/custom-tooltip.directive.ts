import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { CustomTooltipComponent } from '../component/custom-tooltip.component';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({ selector: '[tooltip]' })
export class CustomTooltipDirective implements OnInit {

  @Input('tooltip') tooltipParameters: { text: string, link: string, status: boolean };
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -8,
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('click')
  show(): void {
    if (this.tooltipParameters.status) {
      const tooltipRef: ComponentRef<CustomTooltipComponent>
        = this.overlayRef.attach(new ComponentPortal(CustomTooltipComponent));
      tooltipRef.instance.tooltipParameters.text = this.tooltipParameters.text;
      tooltipRef.instance.tooltipParameters.link = this.tooltipParameters.link;
      // tooltip close -> will refactor ngZone
      const tooltip = fromEvent(tooltipRef.location.nativeElement, 'click');
      const tooltipUnsubscribe$ = new Subject<void>();
      tooltip.pipe(takeUntil(tooltipUnsubscribe$)).subscribe((event: any) => {
        const target = event.target;
        if (target.classList.contains('tooltip__close-icon')) {
            this.hide();
            tooltipUnsubscribe$.next();
            tooltipUnsubscribe$.complete();
        }
      });
    }
  }

  hide(): void {
    this.overlayRef.detach();
  }
}
