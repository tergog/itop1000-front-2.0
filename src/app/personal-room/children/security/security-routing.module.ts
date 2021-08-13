import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityComponent } from './component/security.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: 'edit',
        loadChildren: () => import('./children/security-edit/security-edit.module').then(m => m.SecurityEditModule)
      },
      {
        path: 'edit-password',
        loadChildren: () => import('./children/security-edit-password/security-edit-password.module').then(m => m.SecurityEditPasswordModule)
      },
      {
        path: '**',
        loadChildren: () => import('./children/security-main/security-main.module').then(m => m.SecurityMainModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
