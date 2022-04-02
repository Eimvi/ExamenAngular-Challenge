import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { FilterIngredient, PopularIngredients } from 'src/app/interfaces/backend';

@Injectable()
export class IngredientsService {

  private readonly URL: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }
  getPopularIngredients(): Observable<PopularIngredients> {
    return this.http.get<PopularIngredients>(`${this.URL}list.php?i=list`);
  }
  getFoodByIngredient(ingredient: string): Observable<FilterIngredient> {
    return this.http.get<FilterIngredient>(`${this.URL}filter.php?i=${ingredient}`);
  }
}
