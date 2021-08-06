import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalRoomComponent } from './component/personal-room.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalRoomComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./children/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./children/wallet/wallet.module').then(m => m.WalletModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./children/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'works',
        loadChildren: () => import('./children/works/works.module').then(m => m.WorksModule)
      },
      {
        path: 'tracker',
        loadChildren: () => import('./children/tracker/tracker.module').then(m => m.TrackerModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./children/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'security',
        loadChildren: () => import('./children/security/security.module').then(m => m.SecurityModule)
      },
      {
        path: 'developers',
        loadChildren: () => import('./children/developers/developers.module').then(m => m.DevelopersModule)
      },
      {
        path: '**',
        redirectTo: 'home'
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
