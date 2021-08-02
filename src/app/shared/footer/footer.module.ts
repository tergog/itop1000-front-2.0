import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './component/footer.component';
import { CustomUiModule } from '../custom-ui/custom-ui.module';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    CustomUiModule,
    NavigationModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
