import { Component, ElementRef, forwardRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl, FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

export const INPUT_AUTH_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputAuthenticationComponent),
  multi: true
};

@Component({
  selector: 'app-input-authentication',
  templateUrl: './input-authentication.component.html',
  styleUrls: ['./input-authentication.component.scss'],
  providers: [INPUT_AUTH_VALUE_ACCESSOR]
})
export class InputAuthenticationComponent implements ControlValueAccessor, OnDestroy {
  @ViewChildren('input') authInputs: QueryList<ElementRef>;
  public unsubscribe$ = new Subject<void>();
  public readonly authenticationGroup: FormGroup = new FormGroup({
    authArray: new FormArray([
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)])
    ])
  });

  private onChange: any;
  private onTouched: any;
  public value: string;
  public disableState: boolean;

  constructor() {
    this.disableState = false;
    this.value = '';
    this.authenticationGroup.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.changeValue(this.authenticationGroup.value);
    });
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disableState = isDisabled;
  }

  changeValue(value: any): void {
    const resultValue = value.authArray.join('');
    this.onChange(resultValue);
    this.onTouched(resultValue);
  }

  getControls(): any {
    return this.authenticationGroup.controls.authArray as FormArray;
  }

  setSelectionStart(event: any): void {
    event.target.selectionStart = event.target.value.length;
  }

  focusIn(event: any): void {
    event.target.parentNode.classList.add('focus');
  }

  focusOut(event: any): void {
    event.target.parentNode.classList.remove('focus');
  }

  change(index: number): void {
    const item = this.authInputs.toArray()[index].nativeElement;
    const nextItem = this.authInputs.toArray()[index + 1].nativeElement;

    if (item.value.length >= 1) {
      nextItem.focus();
    }
  }

  keyDetection(event: KeyboardEvent, index: number) {
    const item = this.authInputs.toArray()[index].nativeElement;
    const previousItem = this.authInputs.toArray()[index - 1].nativeElement;
    if (event.key === 'Backspace') {
      previousItem.focus();
      item.value = '';
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
