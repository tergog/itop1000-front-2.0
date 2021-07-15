import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestUiComponent } from './component/test-ui.component';

const routes: Routes = [
  { path: '', component: TestUiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestUiRoutingModule {
}
