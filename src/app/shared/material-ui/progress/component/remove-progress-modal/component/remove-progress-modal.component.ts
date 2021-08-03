import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CRemoveProgressModalConfigList } from '../remove-progress-modal.config';

@Component({
  selector: 'app-remove-progress-modal',
  templateUrl: './remove-progress-modal.component.html',
  styleUrls: ['./remove-progress-modal.component.scss']
})
export class RemoveProgressModalComponent {
public removeProgressConfig = CRemoveProgressModalConfigList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
