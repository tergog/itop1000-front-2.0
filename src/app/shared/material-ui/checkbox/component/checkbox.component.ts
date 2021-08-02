import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormBuilder, AbstractControl } from '@angular/forms';

import { ICheckboxParameters } from '../checkbox.interfaces';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {
  public invalid = false;
  private onChange: any;
  private onTouched: any;
  public value: boolean;
  public disableState: boolean;
  public _checkboxParameters: ICheckboxParameters;
  @Input() control?: AbstractControl;
  @Input() validation?: boolean;

  @Input() set checkboxParameters(value: ICheckboxParameters) {
    this._checkboxParameters = value;
  }

  get checkboxParameters(): ICheckboxParameters {
    return this._checkboxParameters;
  }

  constructor() {
    this.disableState = false;
    this.value = false;
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

  change(event: any): void {
    this.onChange(event.checked);
    this.onTouched(event.checked);
  }
}
