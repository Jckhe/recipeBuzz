export interface RecipeCard {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient: { [key: number]: string };
  strMeasure: { [key: number]: string };
}

export interface InitialState {
  RecipeCards: RecipeCard[];
  loading: boolean;
  error?: string | null;
}