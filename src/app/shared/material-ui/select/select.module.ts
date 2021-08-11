import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { SelectComponent } from './component/select.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveComponentModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule {
}
