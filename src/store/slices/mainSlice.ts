import { createSlice } from '@reduxjs/toolkit';
import { RecipeCardType, InitialState } from '@/types/Redux.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchMeals } from '@/pages/api/Search';
import { RootState } from '../index';

const initialState: InitialState = {
  SearchedCards: [],
  SavedCards: [],
  loading: false,
  error: null
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    saveRecipe: (state, action: {payload: RecipeCardType}) => {
      state.SavedCards.push({...action.payload, isSaved: true})
    },
    deleteRecipe: (state, action) => {
      state.SavedCards = state.SavedCards.filter((card) => card.idMeal !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log("Checking payload: ", action)
        state.SearchedCards = action.payload;
        console.log("Checking state: ", state)
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Error: ", action.error.message)
      });
  },
});


//Async thunk 
export const fetchMeals = createAsyncThunk(
  "main/fetchMeals",
  async (searchTerm: string) => {
    const meals = await searchMeals(searchTerm);
    return meals.map((meal: any) => ({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strCategory: meal.strCategory,
      strArea: meal.strArea,
      strInstructions: meal.strInstructions,
      strMealThumb: meal.strMealThumb,
      strTags: meal.strTags,
      strYoutube: meal.strYoutube,
      strIngredient: Object.keys(meal)
        .filter((key) => key.startsWith("strIngredient") && meal[key])
        .map((key) => meal[key] as string),
      strMeasure: Object.keys(meal)
        .filter((key) => key.startsWith("strMeasure") && meal[key])
        .map((key) => meal[key] as string),
      isSaved: false
    }));
  }
)

export const { saveRecipe, deleteRecipe } = mainSlice.actions;

export const selectSavedCards = (state: RootState) => state.mainSlice.SavedCards;
export const selectSearchedCards = (state: RootState) => state.mainSlice.SearchedCards;
export const selectLoading = (state: RootState) => state.mainSlice.loading;
export const selectError = (state: RootState) => state.mainSlice.error;

export default mainSlice.reducer;