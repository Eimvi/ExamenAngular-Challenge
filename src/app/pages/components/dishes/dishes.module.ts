import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from './dishes.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

// Services
import { CatalogService } from '../../services/dishes/catalog/catalog.service';
import { DishesService } from '../../services/dishes/dishes/dishes.service';
import { IngredientsService } from '../../services/dishes/ingredients/ingredients.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DishesComponent
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CatalogService,
    DishesService,
    IngredientsService
  ]
})
export class DishesModule { }
