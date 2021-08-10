import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';
import { ProgressModule } from '../../../shared/material-ui/progress/progress.module';
import { LanguageModule } from '../../../shared/custom-ui/language/language.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomUiModule,
    ProgressModule,
    LanguageModule,
    ReactiveComponentModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
