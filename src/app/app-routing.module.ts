import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'authorization',
    loadChildren: () => import('src/app/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: 'test',
    loadChildren: () => import('src/app/test-ui/test-ui.module').then(m => m.TestUiModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
