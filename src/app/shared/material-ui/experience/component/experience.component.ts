import { Component, OnInit, forwardRef, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AddExperienceModalComponent } from './add-experience-modal/component/add-experience-modal.component';
import { EditExperienceModalComponent } from './edit-experience-modal/component/edit-experience-modal.component';
import { RemoveExperienceModalComponent } from './remove-experience-modal/component/remove-experience-modal.component';
import { EExperienceCardView } from './experience-card/experience-card.enums';

export const EXPERIENCE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ExperienceComponent),
  multi: true
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [EXPERIENCE_VALUE_ACCESSOR]
})
export class ExperienceComponent implements OnInit, ControlValueAccessor, OnDestroy {
  public EExperienceCardView = EExperienceCardView;
  private onChange: any;
  private onTouched: any;
  public value: object[];
  public disableState: boolean;
  public experienceGroup: FormArray;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.disableState = false;
    this.value = [];
    this.experienceGroup = this.formBuilder.array([]);
  }

  ngOnInit(): void {
    this.experienceGroup.statusChanges.subscribe(change => {
      this.change();
    });
  }

  openAddExperienceModal(): void {
    this.dialog.open(AddExperienceModalComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(exp => {
        if (exp) {
          (this.experienceGroup as FormArray).push(exp);
        }
      });
  }

  openEditExperienceModal(event: any): void {
    const id = event;
    this.dialog.open(EditExperienceModalComponent, {
      data: (this.experienceGroup as FormArray).value[id]
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(exp => {
        if (exp) {
          (this.experienceGroup as FormArray).removeAt(id);
          (this.experienceGroup as FormArray).push(exp);
        }
      });
  }

  openRemoveExperienceModal(event: any): void {
    const id = event;
    this.dialog.open(RemoveExperienceModalComponent, {
      data: id
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(removeSubmit => {
        if (removeSubmit) {
          (this.experienceGroup as FormArray).removeAt(id);
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
    this.value = this.experienceGroup.value;
    this.onChange(this.value);
    this.onTouched(this.value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
