import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityEditComponent } from './component/security-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityEditRoutingModule {
}
