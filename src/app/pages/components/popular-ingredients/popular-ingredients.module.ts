import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularIngredientsComponent } from './popular-ingredients.component';
import { PopularIngredientsRoutingModule } from './popular-ingredients-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
// Services
import { IngredientsService } from '../../services/dishes/ingredients/ingredients.service';

@NgModule({
  declarations: [
    PopularIngredientsComponent
  ],
  imports: [
    CommonModule,
    PopularIngredientsRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [
    IngredientsService
  ]
})
export class PopularIngredientsModule { }
