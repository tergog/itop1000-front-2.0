import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomUiModule } from './custom-ui/custom-ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomUiModule
  ],
  exports: [CustomUiModule]
})
export class SharedModule { }
