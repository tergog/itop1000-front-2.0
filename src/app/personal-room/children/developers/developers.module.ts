import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersComponent } from './component/developers.component';
import { DevelopersRoutingModule } from './developers-routing.module';

@NgModule({
  declarations: [
    DevelopersComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule
  ],
  exports: [
    DevelopersComponent
  ]
})
export class DevelopersModule { }
