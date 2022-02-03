import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageRenderComponent } from './page-render.component';


const routes: Routes = [
  {
    path: ':id',
    component: PageRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }