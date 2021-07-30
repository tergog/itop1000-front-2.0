import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalRoomComponent } from './component/personal-room.component';

const routes: Routes = [
  { path: '', component: PersonalRoomComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoomRoutingModule {
}
