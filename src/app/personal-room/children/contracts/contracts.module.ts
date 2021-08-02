import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsComponent } from './component/contracts.component';
import { ContractsRoutingModule } from './contracts-routing.module';

@NgModule({
  declarations: [
    ContractsComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule
  ],
  exports: [
    ContractsComponent
  ]
})
export class ContractsModule { }
