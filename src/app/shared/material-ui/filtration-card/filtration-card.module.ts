import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrationCardComponent } from './component/filtration-card.component';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FiltrationCardComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    ReactiveFormsModule
  ],
  exports: [
    FiltrationCardComponent
  ]
})
export class FiltrationCardModule { }
