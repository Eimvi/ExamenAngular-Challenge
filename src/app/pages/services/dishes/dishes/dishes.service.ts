import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { Dishes, FilterAreaDishes, FilterCategoryDishes } from 'src/app/interfaces/backend';
import { FilterOne, Filters } from 'src/app/interfaces/frontend';

@Injectable()
export class DishesService {

  private readonly URL: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }
  getDishById(id: string): Observable<Filters> {
    return this.http.get<Dishes>(`${this.URL}lookup.php?i=${id}`).pipe(
      map(resp => {
        let instructionsOne: FilterOne[] = [];
        let instructionsTwo: FilterOne[] = [];
        let filters: Filters;
        instructionsOne.push({measure: resp.meals[0].strMeasure1, ingredient: resp.meals[0].strIngredient1});
        instructionsOne.push({measure: resp.meals[0].strMeasure1, ingredient: resp.meals[0].strIngredient1});
        instructionsOne.push({measure: resp.meals[0].strMeasure2, ingredient: resp.meals[0].strIngredient2});
        instructionsOne.push({measure: resp.meals[0].strMeasure3, ingredient: resp.meals[0].strIngredient3});
        instructionsOne.push({measure: resp.meals[0].strMeasure4, ingredient: resp.meals[0].strIngredient4});
        instructionsOne.push({measure: resp.meals[0].strMeasure5, ingredient: resp.meals[0].strIngredient5});
        instructionsOne.push({measure: resp.meals[0].strMeasure6, ingredient: resp.meals[0].strIngredient6});
        instructionsOne.push({measure: resp.meals[0].strMeasure7, ingredient: resp.meals[0].strIngredient7});
        instructionsOne.push({measure: resp.meals[0].strMeasure8, ingredient: resp.meals[0].strIngredient8});
        instructionsOne.push({measure: resp.meals[0].strMeasure9, ingredient: resp.meals[0].strIngredient9});
        instructionsOne.push({measure: resp.meals[0].strMeasure10, ingredient: resp.meals[0].strIngredient10});

        instructionsTwo.push({measure:resp.meals[0].strMeasure11, ingredient: resp.meals[0].strIngredient11});
        instructionsTwo.push({measure:resp.meals[0].strMeasure12, ingredient: resp.meals[0].strIngredient12});
        instructionsTwo.push({measure:resp.meals[0].strMeasure13, ingredient: resp.meals[0].strIngredient13});
        instructionsTwo.push({measure:resp.meals[0].strMeasure14, ingredient: resp.meals[0].strIngredient14});
        instructionsTwo.push({measure:resp.meals[0].strMeasure15, ingredient: resp.meals[0].strIngredient15});
        instructionsTwo.push({measure:resp.meals[0].strMeasure16!, ingredient: resp.meals[0].strIngredient16!});
        instructionsTwo.push({measure:resp.meals[0].strMeasure17!, ingredient: resp.meals[0].strIngredient17!});
        instructionsTwo.push({measure:resp.meals[0].strMeasure18!, ingredient: resp.meals[0].strIngredient18!});
        instructionsTwo.push({measure:resp.meals[0].strMeasure19!, ingredient: resp.meals[0].strIngredient19!});
        instructionsTwo.push({measure:resp.meals[0].strMeasure20!, ingredient: resp.meals[0].strIngredient20!});

        instructionsOne = instructionsOne.filter(item => item.measure != "");
        instructionsTwo = instructionsTwo.filter(item => item.measure != "");

        filters = {
          instructionsOne,
          instructionsTwo,
          urlVideo: resp.meals[0].strYoutube.replace('/watch?', '/embed/').replace('v=', ''),
          instructions: resp.meals[0].strInstructions,
          title: resp.meals[0].strMeal,
          image: resp.meals[0].strMealThumb
        }
        return filters;
      })
    )
  }
  getDishes(): Observable<Dishes> {
    return this.http.get<Dishes>(`${this.URL}search.php?s=`);
  }
  getRandomDishes(): Observable<Dishes> {
    return this.http.get<Dishes>(`${this.URL}random.php`);
  }
  getDishesArea(area: string): Observable<FilterAreaDishes> {
    return this.http.get<FilterAreaDishes>(`${this.URL}filter.php?a=${area}`)
  }
  getDishesByCategory(category: string): Observable<FilterCategoryDishes> {
    return this.http.get<FilterCategoryDishes>(`${this.URL}filter.php?c=${category}`);
  }
}
