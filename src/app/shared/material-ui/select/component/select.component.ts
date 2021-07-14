import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ISelectParameters } from '../select.interfaces';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [SELECT_VALUE_ACCESSOR]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  public _selectParameters: ISelectParameters;
  @Input() set selectParameters(value: ISelectParameters){
    this._selectParameters = value;
    this.defaultSelectValue = value.defaultValue;
  }
  get selectParameters(): ISelectParameters{
    return this._selectParameters;
  }
  private onChange: any;
  private onTouched: any;
  public value: string;
  public disableState: boolean;
  @ViewChild('expansionPanel') expansionPanel: MatExpansionPanel;
  public panelOpenState = false;
  public selectValue: string;
  public defaultSelectValue: string;

  constructor() {
  }

  ngOnInit(): void {
    this.selectValue = this.defaultSelectValue;
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

  setSelectValue({ target }: any): void {
    const value = target.dataset.value;
    this.selectValue = value;
    this.expansionPanel.close();
    this.onChange(value);
    this.onTouched(value);
  }
}
