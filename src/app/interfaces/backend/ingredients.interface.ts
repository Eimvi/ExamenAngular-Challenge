export interface PopularIngredients {
  meals: MealsIngredients[]
}

export interface MealsIngredients {
  idIngredient: string;
  strDescription: string;
  strIngredient: string;
  strType: any;
}

export interface IngredientName {
  ingrediente: string;
}
