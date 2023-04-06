export interface RecipeCardType {
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
  isSaved: boolean
}

export interface InitialState {
  SearchedCards: RecipeCardType[];
  SavedCards: RecipeCardType[];
  loading: boolean;
  error?: string | null;
}