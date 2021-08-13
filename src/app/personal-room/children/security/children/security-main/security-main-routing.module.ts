import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityMainComponent } from './component/security-main.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityMainRoutingModule {
}
