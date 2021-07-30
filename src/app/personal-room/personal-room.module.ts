import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoomComponent } from './component/personal-room.component';
import { PersonalRoomRoutingModule } from './personal-room-routing.module';

@NgModule({
  declarations: [
    PersonalRoomComponent
  ],
  imports: [
    CommonModule,
    PersonalRoomRoutingModule
  ]
})
export class PersonalRoomModule { }
