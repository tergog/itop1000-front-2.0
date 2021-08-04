import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchInputComponent } from './component/search-input.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule {
}
