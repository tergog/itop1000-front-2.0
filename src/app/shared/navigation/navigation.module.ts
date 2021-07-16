import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './component/navigation.component';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule
  ]
})
export class NavigationModule { }
