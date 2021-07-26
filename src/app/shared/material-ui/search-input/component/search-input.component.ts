import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ISearchInputParameters } from '../search-input.interfaces';
import { ESearchInputElementType } from '../search-input.enums';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SearchInputComponent),
  multi: true
};

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class SearchInputComponent implements OnInit, ControlValueAccessor {
  public searchFormGroup: FormGroup;
  public myControl: FormControl;
  public options: string[] = ['React', 'JS', 'Figma', 'Python Numpy FastAI', 'Web'];
  public filteredOptions: Observable<string[]>;
  public focus = false;
  public invalid = false;
  public ESearchInputElementType = ESearchInputElementType;
  public _searchInputParameters: ISearchInputParameters;
  @Input() set searchInputParameters(value: ISearchInputParameters){
    this._searchInputParameters = value;
  }

  get searchInputParameters(): ISearchInputParameters{
    return this._searchInputParameters;
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
    this.myControl = this.formBuilder.control('');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  setInputValue(option: string): void{
    this.onChange(option);
    this.onTouched(option);
  }
}
