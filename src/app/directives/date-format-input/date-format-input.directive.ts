import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateFormatCustomInput]'
})
export class DateFormatInputDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('input', ['$event']) onInput(event: any): void {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^0-9\.]*/g, '').slice(0, 10);
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
