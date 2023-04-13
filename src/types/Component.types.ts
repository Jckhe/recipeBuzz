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
  handleSaveClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isSaved: boolean;
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
  searchTerm: string;
  onInputChange:  (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BookmarkContainerProps {
  savedCards: RecipeCardType[]
}