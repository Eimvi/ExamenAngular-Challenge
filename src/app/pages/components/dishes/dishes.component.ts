import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';

// Interfaces
import { Meal, MealCategory, MealDishes, MealFilter, MealFilterCategory, MealFilterIngredient, MealIngredients } from 'src/app/interfaces/backend';

// Services
import { CatalogService } from '../../services/dishes/catalog/catalog.service';
import { DishesService } from '../../services/dishes/dishes/dishes.service';
import { IngredientsService } from '../../services/dishes/ingredients/ingredients.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent implements OnInit, OnDestroy {


  private destroy = new Subject<void>();

  area: string = '';
  ingredients: string = '';
  category: string = '';

  idCarousel: number = 0;

  dishesArea!: Meal[];
  dishesCategory!: MealCategory[];
  dishesIngredients!: MealIngredients[];
  dishesRandoms: MealDishes[] = [];

  // TODO: VARIABLES TABLA
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource!: MatTableDataSource<any>;
  sizeTable: number = 0;
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  constructor(
    private catalogService: CatalogService,
    private dishesService: DishesService,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit(): void {
    this.getCatalog();
    this.getDishes();
    this.randomDishes();
    setInterval(() => {
      this.randomDishes();
    }, 300000);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getCatalog(): void {
    this.catalogService.getAreas().pipe(takeUntil(this.destroy)).subscribe((resp) => {
      this.dishesArea = resp.meals;
    });

    this.catalogService.getCategories().pipe(takeUntil(this.destroy)).subscribe((resp) => {
      this.dishesCategory = resp.meals;
    });

    this.catalogService.getIngredients().pipe(takeUntil(this.destroy)).subscribe((resp) => {
      this.dishesIngredients = resp.meals;
    });
  }

  getDishes(): void {
    this.dishesService.getDishes().pipe(takeUntil(this.destroy)).subscribe((res) => {
      this.setDataTable(res.meals);
    });
  }

  randomDishes(): void {
    this.dishesRandoms = [];
    switch(this.idCarousel) {
      case 0:
        this.getRandomDishes([0, 2, 4, 3, 8], 1);
        break;
      case 1:
        this.getRandomDishes([1, 3, 5, 4, 9], 2);
        break;
      case 2:
        this.getRandomDishes([2, 4, 6, 7, 1], 0);
        break;
    }
  }

  getRandomDishes(arr: number[], id: number): void {
    this.idCarousel = id;
    this.dishesService.getDishes().pipe(takeUntil(this.destroy)).subscribe((res) => {
      this.dishesRandoms.push(res.meals[arr[0]]);
      this.dishesRandoms.push(res.meals[arr[1]]);
      this.dishesRandoms.push(res.meals[arr[2]]);
      this.dishesRandoms.push(res.meals[arr[3]]);
      this.dishesRandoms.push(res.meals[arr[4]]);
    });
  }

  filterTable(id: number): void {
    switch(id) {
      case 1:
        this.dishesService.getDishesArea(this.area).pipe(takeUntil(this.destroy)).subscribe((res) => {
          this.setDataTable(res.meals);
        });
        break;
      case 2:
        this.dishesService.getDishesByCategory(this.category).pipe(takeUntil(this.destroy)).subscribe((res) => {
          this.setDataTable(res.meals);
        });
        break;
      case 3:
        this.ingredientsService.getFoodByIngredient(this.ingredients.replace(/ /g, "_").toLowerCase()).pipe(takeUntil(this.destroy)).subscribe((res) => {
          this.setDataTable(res.meals);
        });
        break;
    }
  }

  setDataTable(value: MealDishes[] | MealFilter[] | MealFilterCategory[] | MealFilterIngredient[]): void {
    this.dataSource = new MatTableDataSource(value);
    this.sizeTable = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
  }

  cleanFilter(): void {
    this.area = '';
    this.category = '';
    this.ingredients = '';
    this.getDishes();
  }

}
