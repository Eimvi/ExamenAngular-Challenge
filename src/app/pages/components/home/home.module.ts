import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

// Material
import { MatCardModule } from '@angular/material/card';

// Services
import { DishesService } from '../../services/dishes/dishes/dishes.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [
    DishesService
  ]
})
export class HomeModule { }
