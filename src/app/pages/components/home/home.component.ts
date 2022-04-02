import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

// Services
import { DishesService } from '../../services/dishes/dishes/dishes.service';

// Interface used only here
interface RandomDish {
  srcImage: string;
  title: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();
    // TODO: VARIABLES GENERALES
  randomDish: RandomDish = {
    srcImage : '',
    title : '',
    id : ''
  };

  constructor(private dishesService: DishesService) {}

  ngOnInit(): void {
    this.getRandomDish();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getRandomDish(): void{
    this.dishesService.getRandomDishes().pipe(takeUntil(this.destroy)).subscribe((resp) => {
      this.randomDish = {
        srcImage : resp.meals[0].strMealThumb,
        title : resp.meals[0].strMeal,
        id : resp.meals[0].idMeal
      }
    })
  }

}
