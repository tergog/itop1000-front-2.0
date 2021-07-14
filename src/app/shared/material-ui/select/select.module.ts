import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { SelectComponent } from './component/select.component';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule {
}
