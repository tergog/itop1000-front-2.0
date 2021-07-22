import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchInputComponent } from './component/search-input.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveComponentModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule {
}
