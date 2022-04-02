import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Guard
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./components/ingredients/ingredients.module').then(m => m.IngredientsModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'dishes',
    loadChildren: () => import('./components/dishes/dishes.module').then(m => m.DishesModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'dish-detail/:id',
    loadChildren: () => import('./components/dish-detail/dish-detail.module').then(m => m.DishDetailModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'popular-ingredients/:name',
    loadChildren: () => import('./components/popular-ingredients/popular-ingredients.module').then(m => m.PopularIngredientsModule),
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
