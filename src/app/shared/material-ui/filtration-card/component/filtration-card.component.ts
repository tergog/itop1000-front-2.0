import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const FILTER_CARD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FiltrationCardComponent),
  multi: true
};

@Component({
  selector: 'app-filtration-card',
  templateUrl: './filtration-card.component.html',
  styleUrls: ['./filtration-card.component.scss'],
  providers: [FILTER_CARD_VALUE_ACCESSOR]
})
export class FiltrationCardComponent implements ControlValueAccessor, OnDestroy {
  public filtrationCardConfig: { label: string, errorMessage: string }[] = [];
  public filtrationCardFormGroup: FormGroup;
  public unsubscribe$ = new Subject<void>();
  @Input() type: string;
  private onChange: any;
  private onTouched: any;
  public value: { [key: string]: string[] };
  public disableState: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.filtrationCardFormGroup = this.formBuilder.group({});
  }

  writeValue(value: { [key: string]: string[] }): void {
    this.value = value;
    Object.keys(this.value).forEach((v: string) => {
      const configData = {
        label: v,
        errorMessage: '',
      };
      this.filtrationCardFormGroup.addControl(v, new FormControl(false));
      this.filtrationCardConfig.push(configData);
    });
    this.filtrationCardFormGroup.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((formValues: { [key: string]: string }) => {
        this.change(formValues);
      });
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

  change(formValues: { [key: string]: string }): void {
    this.onChange(formValues);
    this.onTouched(formValues);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
