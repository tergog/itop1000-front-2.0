import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityEditPasswordComponent } from './component/security-edit-password.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityEditPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityEditPasswordRoutingModule {
}
