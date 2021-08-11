import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl } from '@angular/forms';

import { ISelectParameters } from '../select.interfaces';
import {
  getCountriesData,
  getFreelancerCategories,
  getLanguagesData,
  getOperationsData, getProductOwnerCategories,
  getProficienciesData, getStaticData,
  getSubCategoriesData,
  IState
} from '../../../../reducers';
import { Store } from '@ngrx/store';
import { EStaticDataType } from '../../../../reducers/static/static.enums';
import { EUserRole } from '../../../../enums/itop.enums';
import { Observable } from 'rxjs';
import { ICategoriesUser, IStaticState } from '../../../../reducers/static/static.interfaces';

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
  public componentParameters: ISelectParameters;

  @Input() subCategory?: string;
  @Input() set selectParameters(value: ISelectParameters) {
    this.componentParameters = value;
  }

  get selectParameters(): ISelectParameters {
    return this.componentParameters;
  }

  @ViewChild('expansionPanel') expansionPanel: MatExpansionPanel;
  public staticData$: Observable<IStaticState> = this.store.select(getStaticData);
  public EStaticDataType = EStaticDataType;
  public userRole: string = localStorage.getItem('role') || EUserRole.Freelancer;

  public panelOpenState = false;
  private onChange: any;
  private onTouched: any;
  public value: string | null;
  public disableState: boolean;
  public selectValue: string;
  public defaultSelectValue = 'Select 1 option';

  constructor(private store: Store<IState>) {
  }

  ngOnInit(): void {
    this.selectValue = this.defaultSelectValue;
  }

  writeValue(value: string | null): void {
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
