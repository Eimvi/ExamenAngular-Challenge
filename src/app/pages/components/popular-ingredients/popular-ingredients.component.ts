import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

// Interfaces
import { MealFilterIngredient } from 'src/app/interfaces/backend';

// Services
import { IngredientsService } from '../../services/dishes/ingredients/ingredients.service';

@Component({
  selector: 'app-popular-ingredients',
  templateUrl: './popular-ingredients.component.html',
  styleUrls: ['./popular-ingredients.component.scss']
})
export class PopularIngredientsComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();
  foods: MealFilterIngredient[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
        this.getPopularIngredients(params.name);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getPopularIngredients(name: string): void {
    const ingredientReplace = name.replace(/ /g, "_").toLowerCase();
    this.ingredientsService.getFoodByIngredient(ingredientReplace).pipe(takeUntil(this.destroy)).subscribe(
      (resp) => {
        this.foods = resp.meals
      }
    )
  }

}
