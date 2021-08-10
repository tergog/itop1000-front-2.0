import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoomComponent } from './component/personal-room.component';
import { PersonalRoomRoutingModule } from './personal-room-routing.module';
import { CustomUiModule } from '../shared/custom-ui/custom-ui.module';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { BreadcrumbsModule } from '../shared/breadcrumbs/breadcrumbs.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    PersonalRoomComponent
  ],
  imports: [
    CommonModule,
    PersonalRoomRoutingModule,
    CustomUiModule,
    NavigationModule,
    HeaderModule,
    FooterModule,
    BreadcrumbsModule,
    ReactiveComponentModule
  ],
  exports: [
    PersonalRoomComponent
  ]
})
export class PersonalRoomModule { }
