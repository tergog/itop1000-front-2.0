import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './component/checkbox.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule {
}
