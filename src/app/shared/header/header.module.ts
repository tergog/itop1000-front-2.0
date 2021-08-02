import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './component/header.component';
import { CustomUiModule } from '../custom-ui/custom-ui.module';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomUiModule,
    NavigationModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
