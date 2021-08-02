import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalRoomComponent } from './component/personal-room.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalRoomComponent,
    pathMatch: 'full',
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./children/home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoomRoutingModule {
}
