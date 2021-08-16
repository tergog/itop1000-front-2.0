import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';
import { ProgressModule } from '../../../shared/material-ui/progress/progress.module';
import { LanguageModule } from '../../../shared/custom-ui/language/language.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { EditDescriptionComponent } from './children/edit-description/edit-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomeComponent,
    EditDescriptionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomUiModule,
    ProgressModule,
    LanguageModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
