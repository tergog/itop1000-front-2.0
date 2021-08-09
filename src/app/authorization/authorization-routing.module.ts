import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponent } from './component/authorization.component';
import { AuthorizationFormComponent } from './children/authorization-form/authorization-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign',
        pathMatch: 'full'
      },
      {
        path: 'sign',
        component: AuthorizationFormComponent
      },
      {
        path: 'info',
        loadChildren: () => import('src/app/shared/stepper/stepper.module').then(m => m.StepperModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {
}
