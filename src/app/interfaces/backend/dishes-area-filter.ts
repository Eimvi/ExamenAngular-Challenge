export interface FilterAreaDishes {
  meals: MealFilter[];
}

export interface MealFilter {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
