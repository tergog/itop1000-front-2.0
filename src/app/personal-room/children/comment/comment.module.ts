import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './component/comment.component';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';


@NgModule({
  declarations: [
    CommentComponent
  ],
  exports: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CustomUiModule
  ]
})
export class CommentModule { }
