import { RecipeCardType } from "./Redux.types";

export interface RecipeCardProps {
  recipe: RecipeCardType;
  toggleSavedAlert: (arg0: boolean) => void;
  toggleDeleteAlert: (arg0: boolean) => void;
}

export interface RecipeModalProps {
  recipe: RecipeCardType;
  isOpen: boolean;
  onClose: () => void;
}

export interface SuspenseModalProps {
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