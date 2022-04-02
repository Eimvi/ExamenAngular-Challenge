import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishDetailComponent } from './dish-detail.component';
import { DishDetailRoutingModule } from './dish-detail-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

// Material
import { MatCardModule } from '@angular/material/card';
// Service
import { DishesService } from '../../services/dishes/dishes/dishes.service';
// Pipes
import { SanitizeUrlPipe } from '../../../pipes/sanitize-url.pipe';

@NgModule({
  declarations: [
    DishDetailComponent,
    SanitizeUrlPipe
  ],
  imports: [
    CommonModule,
    DishDetailRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [DishesService]
})
export class DishDetailModule { }
