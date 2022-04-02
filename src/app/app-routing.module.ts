import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'welcome',
        loadChildren: () => import ('./pages/pages.module').then( m => m.PagesModule)
      },
      {
        path: 'static',
        loadChildren: () => import ('./pages/components/not-found/not-found.module').then( m => m.NotFoundModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome/login'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'static/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
