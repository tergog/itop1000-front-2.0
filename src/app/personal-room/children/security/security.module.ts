import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityComponent } from './component/security.component';
import { SecurityRoutingModule } from './security-routing.module';


@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  exports: [
    SecurityComponent
  ]
})
export class SecurityModule { }
