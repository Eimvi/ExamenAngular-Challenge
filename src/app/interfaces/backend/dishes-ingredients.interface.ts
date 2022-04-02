export interface IngredientsDishes {
  meals: MealIngredients[];
}

export interface MealIngredients {
  idIngredient: string;
  strIngredient: string;
  strDescription?: string;
  strType?: string;
}
