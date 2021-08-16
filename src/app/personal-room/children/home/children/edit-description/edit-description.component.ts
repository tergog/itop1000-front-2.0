import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CHomeConfigList } from '../../home.config';
import { PersonalRoomService } from '../../../../services/personal-room/personal-room.service';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.scss']
})
export class EditDescriptionComponent implements OnDestroy {
  public homeConfig = CHomeConfigList;
  public descriptionFormGroup: FormGroup;
  public unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { description: string },
    private personalRoomService: PersonalRoomService
  ) {
    this.descriptionFormGroup = new FormGroup({
      description: new FormControl(this.data.description, [Validators.minLength(50)])
    });
  }

  onSubmit(): void {
    const stateForm = this.descriptionFormGroup.valid;
    if (stateForm) {
      const formData = this.descriptionFormGroup.value;
      this.personalRoomService.setNewDescription(formData.description)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res: { message: string }) => {
          if (res.message === 'ok') {
            this.personalRoomService.setNewDescriptionToStore(formData.description);
          } else {
            console.log('error set new description');
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
