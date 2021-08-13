import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { mergeMap, take, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { EProgressCardView } from '../../../../shared/material-ui/progress/component/progress-card/progress-card.enums';
import { EditProgressModalComponent } from '../../../../shared/material-ui/progress/component/edit-progress-modal/component/edit-progress-modal.component';
import { RemoveProgressModalComponent } from '../../../../shared/material-ui/progress/component/remove-progress-modal/component/remove-progress-modal.component';
import { AddProgressModalComponent } from '../../../../shared/material-ui/progress/component/add-progress-modal/component/add-progress-modal.component';
import { CHomeConfigList } from '../home.config';
import { EProgressType } from '../../../../shared/material-ui/progress/progress.enums';
import { UserDataService } from '../../../../services/user-data/user-data.service';
import { IUserDataState } from '../../../../reducers/user-data/user-data.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public EProgressCardView = EProgressCardView;
  public EProgressType = EProgressType;
  public homeConfig = CHomeConfigList;
  public educationFormArray: FormArray;
  public unsubscribe$ = new Subject<void>();
  public personalRoomData$: Observable<IUserDataState> = this.userDataService.userData;

  constructor(
    private userDataService: UserDataService,
    private dialog: MatDialog
  ) {
    this.educationFormArray = new FormArray([]);
  }

  ngOnInit(): void {
    this.personalRoomData$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      data.educations.forEach((item: any) => {
        (this.educationFormArray as FormArray).push(new FormControl(item));
      });
    });
  }

  openAddProgressModal(): void {
    this.dialog.open(AddProgressModalComponent, {
      data: {
        type: EProgressType.Education
      }
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(education => {
        if (education) {
          (this.educationFormArray as FormArray).push(education);
        }
      });
  }

  openEditProgressModal(event: any): void {
    const id = event;
    this.dialog.open(EditProgressModalComponent, {
      data: {
        type: EProgressType.Education,
        formValues: (this.educationFormArray as FormArray).value[id]
      }
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(education => {
        if (education) {
          (this.educationFormArray as FormArray).removeAt(id);
          (this.educationFormArray as FormArray).push(education);
        }
      });
  }

  openRemoveProgressModal(event: any): void {
    const id = event;
    this.dialog.open(RemoveProgressModalComponent, {
      data: {
        type: EProgressType.Education,
        id
      }
    })
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(removeSubmit => {
        if (removeSubmit) {
          (this.educationFormArray as FormArray).removeAt(id);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
