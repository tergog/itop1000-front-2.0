import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CAddProgressModalConfigList } from '../add-progress-modal.config';
import { EProgressType } from '../../../progress.enums';

@Component({
  selector: 'app-add-experience-modal',
  templateUrl: './add-progress-modal.component.html',
  styleUrls: ['./add-progress-modal.component.scss']
})
export class AddProgressModalComponent {
  public addProgressModalConfig = CAddProgressModalConfigList;
  public EProgressModalType = EProgressType;
  public progressModalType: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.progressModalType = this.data.type;
  }
}
