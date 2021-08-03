import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';
import { ExperienceModule } from '../../../shared/material-ui/experience/experience.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomUiModule,
    ExperienceModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
