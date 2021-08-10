import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponent } from './component/authorization.component';
import { AuthorizationFormComponent } from './children/authorization-form/component/authorization-form.component';
import { WaitingComponent } from './children/waiting/component/waiting.component';
import { AuthenticationComponent } from './children/authentication/component/authentication.component';
import { QrCodeComponent } from './children/qr-code/component/qr-code.component';
import { WaitingGuard } from '../guards/waiting-guard/waiting.guard';

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
      },
      {
        path: 'qr-code',
        component: QrCodeComponent
      },
      {
        path: 'authentication',
        component: AuthenticationComponent
      },
      {
        path: 'waiting',
        component: WaitingComponent,
        canActivate: [WaitingGuard]
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
