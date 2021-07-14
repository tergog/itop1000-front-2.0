import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { CustomTooltipComponent } from '../component/custom-tooltip.component';

@Directive({ selector: '[tooltip]' })
export class CustomTooltipDirective implements OnInit {

  @Input('tooltip') text = '';
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

  @HostListener('mouseenter')
  show(): void {
    const tooltipRef: ComponentRef<CustomTooltipComponent>
      = this.overlayRef.attach(new ComponentPortal(CustomTooltipComponent));
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide(): void {
    this.overlayRef.detach();
  }
}
