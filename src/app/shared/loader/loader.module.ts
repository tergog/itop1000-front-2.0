import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './component/loader.component';
import { CustomUiModule } from '../custom-ui/custom-ui.module';
import { LoaderRoutingModule } from './loader-routing.module';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    CustomUiModule,
    LoaderRoutingModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
