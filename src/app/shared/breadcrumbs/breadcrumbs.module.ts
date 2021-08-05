import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './component/breadcrumbs.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule { }
