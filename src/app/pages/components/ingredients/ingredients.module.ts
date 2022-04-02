import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// Services
import { IngredientsService } from '../../services/dishes/ingredients/ingredients.service';

@NgModule({
  declarations: [
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule
  ],
  providers: [
    IngredientsService
  ]
})
export class IngredientsModule { }
