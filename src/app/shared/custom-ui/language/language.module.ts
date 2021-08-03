import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { LanguageComponent } from './component/language.component';
import { AddLanguageModalComponent } from './children/add-language-modal/component/add-language-modal.component';
import { CustomUiModule } from '../custom-ui.module';
import { SelectModule } from '../../material-ui/select/select.module';
import { DeleteLanguageModalComponent } from './children/delete-language-modal/component/delete-language-modal.component';

@NgModule({
  declarations: [
    LanguageComponent,
    AddLanguageModalComponent,
    DeleteLanguageModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CustomUiModule,
    ReactiveFormsModule,
    SelectModule
  ],
  exports: [
    LanguageComponent
  ]
})
export class LanguageModule {
}
