import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularIngredientsComponent } from './popular-ingredients.component';


const routes: Routes = [
  {
    path: '',
    component: PopularIngredientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularIngredientsRoutingModule { }
