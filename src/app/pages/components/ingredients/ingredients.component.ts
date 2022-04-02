import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';

// Interfaces
import { MealsIngredients } from 'src/app/interfaces/backend';

// Services
import { IngredientsService } from '../../services/dishes/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();
  // TODO: VARIABLES TABLA
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource!: MatTableDataSource<MealsIngredients>;
  tamanioTabla = 0;
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {
    this.getIngredients();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getIngredients(): void {
    this.ingredientsService.getPopularIngredients().pipe(takeUntil(this.destroy)).subscribe((res) => {
      const ingredientes: MealsIngredients[] = res.meals;
      this.dataSource = new MatTableDataSource(ingredientes);
      this.tamanioTabla = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator;
    });
  }
}
