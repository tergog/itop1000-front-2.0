import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputAuthenticationComponent } from './component/input-authentication.component';

@NgModule({
  declarations: [
    InputAuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    InputAuthenticationComponent
  ]
})
export class InputAuthenticationModule { }
