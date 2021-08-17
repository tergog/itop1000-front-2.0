import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CLanguageConfigList } from '../language.config';
import { AddLanguageModalComponent } from '../children/add-language-modal/component/add-language-modal.component';
import { DeleteLanguageModalComponent } from '../children/delete-language-modal/component/delete-language-modal.component';
import { UserDataService } from '../../../../services/user-data/user-data.service';
import { ILanguagesData, IUserDataState } from '../../../../reducers/user-data/user-data.interfaces';
import { LanguageService } from '../services/language.service';

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
    private languageService: LanguageService
  ) {
    this.languageArray = new FormArray([]);
    this.personalRoomData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        data.languages.forEach(language => {
          return (this.languageArray as FormArray).push(new FormControl(language));
        });
      });
  }

  openAddLanguageModal(): void {
    this.dialog.open(AddLanguageModalComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((language: ILanguagesData) => {
        if (language) {
          this.addLanguage(language);
        }
      });
  }

  addLanguage(language: ILanguagesData): void {
    this.languageService.addNewLanguage(language)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: { message: string }) => {
        if (result.message === 'ok') {
          this.languageService.addNewLanguageToStore(language);
          (this.languageArray as FormArray).push(new FormControl(language));
        }
      });
  }

  removeLanguageModal(index: number): void {
    this.dialog.open(DeleteLanguageModalComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: boolean) => {
        if (result) {
          const languageName = this.languageArray.value[index].language;
          this.removeLanguage(languageName, index);
        }
      });
  }

  removeLanguage(languageName: string, index: number): void {
    this.languageService.deleteLanguage(languageName)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: { message: string }) => {
        if (res.message === 'ok') {
          this.languageService.deleteLanguageFromStore(index);
          (this.languageArray as FormArray).removeAt(index);
        }
      });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
