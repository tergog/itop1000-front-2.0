import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CLanguageConfigList } from '../language.config';
import { AddLanguageModalComponent } from '../children/add-language-modal/component/add-language-modal.component';
import { DeleteLanguageModalComponent } from '../children/delete-language-modal/component/delete-language-modal.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit, OnDestroy {
  public languageConfig = CLanguageConfigList;
  public unsubscribe$ = new Subject<void>();
  public languageGroup: FormArray;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.languageGroup = this.formBuilder.array([
      { language: 'English', proficiency: 'Conversational' },
      { language: 'Italian', proficiency: 'Basic' },
      { language: 'German', proficiency: 'Native' },
    ]);
  }

  openAddExperienceModal(): void {
    this.dialog.open(AddLanguageModalComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(language => {
        if (language) {
          (this.languageGroup as FormArray).push(language);
        }
      });
  }

  removeLanguage(index: number): void {
    this.dialog.open(DeleteLanguageModalComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        if (result) {
          (this.languageGroup as FormArray).removeAt(index);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
