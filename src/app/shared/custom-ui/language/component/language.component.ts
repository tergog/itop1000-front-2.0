import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CLanguageConfigList } from '../language.config';
import { AddLanguageModalComponent } from '../children/add-language-modal/component/add-language-modal.component';
import { DeleteLanguageModalComponent } from '../children/delete-language-modal/component/delete-language-modal.component';
import { UserDataService } from '../../../../services/user-data/user-data.service';
import { IUserDataState } from '../../../../reducers/user-data/user-data.interfaces';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnDestroy {
  public languageConfig = CLanguageConfigList;
  public unsubscribe$ = new Subject<void>();
  public languageArray: FormArray;
  public personalRoomData$: Observable<IUserDataState> = this.userDataService.userData$;

  constructor(
    private dialog: MatDialog,
    private userDataService: UserDataService,
    private formBuilder: FormBuilder
  ) {
    this.languageArray = this.formBuilder.array([]);
    this.personalRoomData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        data.languages.forEach(language => {
          return (this.languageArray as FormArray).push(new FormControl(language));
        });
      });
  }

  openAddExperienceModal(): void {
    this.dialog.open(AddLanguageModalComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(language => {
        if (language) {
          (this.languageArray as FormArray).push(language);
        }
      });
  }

  removeLanguage(index: number): void {
    this.dialog.open(DeleteLanguageModalComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        if (result) {
          (this.languageArray as FormArray).removeAt(index);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
