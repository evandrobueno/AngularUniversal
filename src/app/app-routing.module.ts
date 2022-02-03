import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  { path: 'page-error', component: PageErrorComponent },
  { path: 'page', loadChildren: () => import('./page-render/page.module').then(m => m.PageModule), data: {
    title: 'About',
    metatags: {
      'og:description': `your description here`,
      'twitter:description': `your description`,
       keywords: `your keywords here`
    }
  }},
  { path: '', redirectTo: '/page-error', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
