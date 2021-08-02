import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, AbstractControl } from '@angular/forms';

import { IInputParameters } from '../input.interfaces';
import { EInputElementType } from '../input.enums';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  public focus = false;
  public EInputElementType = EInputElementType;
  public _inputParameters: IInputParameters;
  @Input() control?: AbstractControl;
  @Input() validation?: boolean;

  @Input() set inputParameters(value: IInputParameters) {
    this._inputParameters = value;
  }

  get inputParameters(): IInputParameters {
    return this._inputParameters;
  }

  private onChange: any;
  private onTouched: any;
  public value: string;
  public disableState: boolean;

  constructor() {
    this.disableState = false;
    this.value = '';
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
    this.onChange(event.target.value);
    this.onTouched(event.target.value);
  }

  changeDate(event: any): void{
    const value = (event.target.value as Date).getTime();
    this.onChange(value);
    this.onTouched(value);
  }

  changeRate(event: any): void{
    const value = Number(event.target.value);
    this.onChange(value);
    this.onTouched(value);
  }
}
