export interface FilterIngredient {
  meals: MealFilterIngredient[];
}

export interface MealFilterIngredient {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
