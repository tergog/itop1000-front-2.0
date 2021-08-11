import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityComponent } from './component/security.component';
import { SecurityRoutingModule } from './security-routing.module';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';


@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    CustomUiModule
  ],
  exports: [
    SecurityComponent
  ]
})
export class SecurityModule { }
