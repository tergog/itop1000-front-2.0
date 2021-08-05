import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksComponent } from './component/works.component';
import { WorksCommentComponent } from './children/works-comment/works-comment.component';
import { WorksListComponent } from './children/works-list/works-list.component';

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [
      {
        path: '',
        component: WorksListComponent
      },
      {
        path: 'comment',
        component: WorksCommentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {
}
