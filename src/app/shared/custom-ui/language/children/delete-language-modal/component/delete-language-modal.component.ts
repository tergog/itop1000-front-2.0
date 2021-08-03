import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CDeleteLanguageModalConfigList } from '../delete-language-modal.config';

@Component({
  selector: 'app-delete-language-modal',
  templateUrl: './delete-language-modal.component.html',
  styleUrls: ['./delete-language-modal.component.scss']
})
export class DeleteLanguageModalComponent {

  public deleteLanguageConfig = CDeleteLanguageModalConfigList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
