import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomUiModule } from './custom-ui/custom-ui.module';
import { HeaderModule } from './header/header.module';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { NavigationModule } from './navigation/navigation.module';
import { LandingGuideComponent } from './landing-guide/component/landing-guide.component';
import { FooterModule } from './footer/footer.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    LandingGuideComponent
  ],
  imports: [
    CommonModule,
    CustomUiModule,
    HeaderModule,
    MaterialUiModule,
    NavigationModule,
    FooterModule
  ],
  exports: [
    CustomUiModule,
    HeaderModule,
    MaterialUiModule,
    NavigationModule,
    LandingGuideComponent,
    FooterModule
  ]
})
export class SharedModule {
}
