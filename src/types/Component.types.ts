import { RecipeCardType } from "./Redux.types";

export interface RecipeCardProps {
  recipe: RecipeCardType;
}

export interface RecipeModalProps {
  recipe: RecipeCardType;
  isOpen: boolean;
  onClose: () => void;
}

export interface SearchBarProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string
}

export interface IndexContainerProps {
  recipeCards: RecipeCardType[];
}

export interface BookmarkContainerProps {
  savedCards: RecipeCardType[]
}