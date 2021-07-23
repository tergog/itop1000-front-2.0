import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormArray, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, } from '@angular/forms';

export const CHIPS_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChipsComponent),
  multi: true
};

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [CHIPS_VALUE_ACCESSOR]
})
export class ChipsComponent implements OnInit, ControlValueAccessor {
  public inputSearchControl: FormControl;
  private onChange: any;
  private onTouched: any;
  public value: string[];
  public disableState: boolean;

  public chipsComponentParameters = {
    buttons: {
      close: {
        text: '',
        type: '',
        view: 'close-small',
        disabled: false
      },
      add: {
        text: 'Add Skill',
        type: '',
        view: 'small-empty-border',
        disabled: false
      }
    },
    searchInputs: {
      big: {
        placeholder: 'Search',
        label: 'Search skills or add your own',
        view: 'big'
      }
    }
  };

  constructor(private formBuilder: FormBuilder) {
    this.disableState = false;
    this.value = [];
    this.inputSearchControl = formBuilder.control('', []);
  }

  ngOnInit(): void {

  }

  selectChip(chip: any): void {
    chip.selected = !chip.selected;
  }

  deleteChip(index: number): void {
    this.value.splice(index, 1);
  }

  writeValue(value: string[]): void {
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

  change(): void {
    this.value.push(this.inputSearchControl.value.trim());
    this.onChange(this.value);
    this.onTouched(this.value);
  }
}
