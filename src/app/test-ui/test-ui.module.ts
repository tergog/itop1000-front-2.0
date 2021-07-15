import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestUiComponent } from './component/test-ui.component';
import { SharedModule } from '../shared/shared.module';
import { TestUiRoutingModule } from './test-ui-routing.module';

@NgModule({
  declarations: [
    TestUiComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestUiRoutingModule
  ],
  exports: [
    TestUiComponent
  ]
})
export class TestUiModule { }
