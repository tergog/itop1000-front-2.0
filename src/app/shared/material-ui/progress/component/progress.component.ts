import { Component, OnInit, forwardRef, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AddProgressModalComponent } from './add-progress-modal/component/add-progress-modal.component';
import { EditProgressModalComponent } from './edit-progress-modal/component/edit-progress-modal.component';
import { RemoveProgressModalComponent } from './remove-progress-modal/component/remove-progress-modal.component';
import { EProgressCardView } from './progress-card/progress-card.enums';
import { EProgressType } from '../progress.enums';

export const EXPERIENCE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProgressComponent),
  multi: true
};

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  providers: [EXPERIENCE_VALUE_ACCESSOR]
})
export class ProgressComponent implements OnInit, ControlValueAccessor, OnDestroy {
  public EProgressCardView = EProgressCardView;
  public EProgressType = EProgressType;
  private onChange: any;
  private onTouched: any;
  public value: object[];
  public disableState: boolean;
  public progressGroup: FormArray;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.disableState = false;
    this.value = [];
    this.progressGroup = this.formBuilder.array([]);
  }

  ngOnInit(): void {
    this.progressGroup.statusChanges.subscribe(change => {
      this.change();
    });
  }

  openAddProgressModal(): void {
    this.dialog.open(AddProgressModalComponent, {
      data: {
        type: EProgressType.Experience,
      }
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(exp => {
        console.log(exp);
        if (exp) {
          (this.progressGroup as FormArray).push(exp);
        }
      });
  }

  openEditProgressModal(event: any): void {
    const id = event;
    this.dialog.open(EditProgressModalComponent, {
      data: {
        type: EProgressType.Experience,
        formValues: (this.progressGroup as FormArray).value[id]
    }
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(exp => {
        if (exp) {
          (this.progressGroup as FormArray).removeAt(id);
          (this.progressGroup as FormArray).push(exp);
        }
      });
  }

  openRemoveProgressModal(event: any): void {
    const id = event;
    this.dialog.open(RemoveProgressModalComponent, {
      data: {
        type: EProgressType.Experience,
        id
      }
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(removeSubmit => {
        if (removeSubmit) {
          (this.progressGroup as FormArray).removeAt(id);
        }
      });
  }

  writeValue(value: object[]): void {
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
    this.value = this.progressGroup.value;
    this.onChange(this.value);
    this.onTouched(this.value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
