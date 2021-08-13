import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { SecurityMainComponent } from './component/security-main.component';
import { CustomUiModule } from '../../../../../shared/custom-ui/custom-ui.module';
import { SecurityMainRoutingModule } from './security-main-routing.module';

@NgModule({
  declarations: [
    SecurityMainComponent
  ],
  imports: [
    CommonModule,
    CustomUiModule,
    SecurityMainRoutingModule,
    ReactiveComponentModule
  ]
})
export class SecurityMainModule { }
