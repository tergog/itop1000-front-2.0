import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormBuilder } from '@angular/forms';

import { IInputParameters } from './input.interfaces';
import { EInputElementType } from './input.enums';

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
export class InputComponent implements OnInit, ControlValueAccessor {
  public focus = false;
  public invalid = false;
  public EInputElementType = EInputElementType;
  public _inputParameters: IInputParameters;

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

  constructor(private formBuilder: FormBuilder) {
    this.disableState = false;
    this.value = '';
  }

  ngOnInit(): void {
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
}
