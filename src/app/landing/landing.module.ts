import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { LandingComponent } from './component/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoaderModule } from '../shared/loader/loader.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    ReactiveComponentModule,
    LoaderModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
