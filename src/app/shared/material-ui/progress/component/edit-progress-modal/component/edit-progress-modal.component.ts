import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CEditProgressModalConfigList } from '../edit-progress-modal.config';
import { EProgressType } from '../../../progress.enums';

@Component({
  selector: 'app-edit-experience-modal',
  templateUrl: './edit-progress-modal.component.html',
  styleUrls: ['./edit-progress-modal.component.scss']
})
export class EditProgressModalComponent {
  public EProgressModalType = EProgressType;
  public editProgressModalConfig = CEditProgressModalConfigList;
  public progressModalType: string;
  public progressModalData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.progressModalType = this.data.type;
    this.progressModalData = this.data.formValues;
  }
}
