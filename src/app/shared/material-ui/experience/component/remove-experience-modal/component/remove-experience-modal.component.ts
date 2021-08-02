import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CRemoveExperienceModalConfigList } from '../remove-experience-modal.config';

@Component({
  selector: 'app-remove-experience-modal',
  templateUrl: './remove-experience-modal.component.html',
  styleUrls: ['./remove-experience-modal.component.scss']
})
export class RemoveExperienceModalComponent {
public removeExperienceConfig = CRemoveExperienceModalConfigList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
