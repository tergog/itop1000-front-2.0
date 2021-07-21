import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { ChipsComponent } from './component/chips.component';
import { ButtonModule } from '../../custom-ui/button/button.module';

@NgModule({
  declarations: [
    ChipsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    ButtonModule
  ],
  exports: [
    ChipsComponent
  ]
})
export class ChipsModule {
}
