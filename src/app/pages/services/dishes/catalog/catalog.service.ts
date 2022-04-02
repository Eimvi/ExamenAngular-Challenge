import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Interfaces
import { AreasDishes, CategoryDishes, IngredientsDishes } from 'src/app/interfaces/backend';

@Injectable()
export class CatalogService {

  private readonly URL: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAreas(): Observable<AreasDishes>{
    return this.http.get<AreasDishes>(`${this.URL}list.php?a=list`)
  }

  getCategories(): Observable<CategoryDishes>{
    return this.http.get<CategoryDishes>(`${this.URL}list.php?c=list`)
  }

  getIngredients(): Observable<IngredientsDishes>{
    return this.http.get<IngredientsDishes>(`${this.URL}list.php?i=list`)
  }
}
