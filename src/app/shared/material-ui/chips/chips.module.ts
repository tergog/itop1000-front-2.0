import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { ChipsComponent } from './component/chips.component';
import { ButtonModule } from '../../custom-ui/button/button.module';
import { SearchInputModule } from '../search-input/search-input.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChipsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    ButtonModule,
    SearchInputModule,
    ReactiveFormsModule
  ],
  exports: [
    ChipsComponent
  ]
})
export class ChipsModule {
}
