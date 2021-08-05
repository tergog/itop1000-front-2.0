import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CSelectionHelpModalConfigList } from '../selection-help-modal.config';

@Component({
  selector: 'app-selection-help-modal',
  templateUrl: './selection-help-modal.component.html',
  styleUrls: ['./selection-help-modal.component.scss']
})
export class SelectionHelpModalComponent {
  public selectionHelpConfig = CSelectionHelpModalConfigList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}


