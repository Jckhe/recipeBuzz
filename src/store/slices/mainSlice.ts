import { createSlice } from '@reduxjs/toolkit';
import { RecipeCardType, InitialState } from '@/types/Redux.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchMeals } from '@/pages/api/Search';
import { RootState } from '../index';
const initialState: InitialState = {
  SearchedCards: [],
  SavedCards: [],
};

if (typeof window !== 'undefined') {
  const savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
  initialState.SavedCards = savedSearches;
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateSearchedCards: (state, action: {payload: Array<RecipeCardType >}) => {
      if (!action.payload || !action.payload.length) return;
      const newCards = action.payload.filter(
        (newCard) => !state.SearchedCards.some((oldCard) => oldCard.idMeal === newCard.idMeal)
      );
      state.SearchedCards = state.SearchedCards.concat(newCards);
    },
    saveRecipe: (state, action: {payload: RecipeCardType}) => {
      state.SavedCards.push({...action.payload, isSaved: true})
      localStorage.setItem('savedSearches', JSON.stringify(state.SavedCards)); // Save the updated saved searches array to local storage
    },
    deleteRecipe: (state, action) => {
      state.SavedCards = state.SavedCards.filter((card) => card.idMeal !== action.payload)
      localStorage.setItem('savedSearches', JSON.stringify(state.SavedCards)); // Save the updated saved searches array to local storage
    },
    syncSavedCards: (state) => {
      if (typeof window !== 'undefined') {
        const savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
        state.SavedCards = savedSearches;
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchMeals.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchMeals.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.error = null;
  //       console.log("Checking payload: ", action)
  //       state.SearchedCards = action.payload;
  //       console.log("Checking state: ", state)
  //     })
  //     .addCase(fetchMeals.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //       console.log("Error: ", action.error.message)
  //     });
  // },
});


//Async thunk 
// export const fetchMeals = createAsyncThunk(
//   "main/fetchMeals",
//   async (searchTerm: string) => {
//     const meals = await searchMeals(searchTerm);
//     return meals.map((meal: any) => ({
//       idMeal: meal.idMeal,
//       strMeal: meal.strMeal,
//       strCategory: meal.strCategory,
//       strArea: meal.strArea,
//       strInstructions: meal.strInstructions,
//       strMealThumb: meal.strMealThumb,
//       strTags: meal.strTags,
//       strYoutube: meal.strYoutube,
//       strIngredient: Object.keys(meal)
//         .filter((key) => key.startsWith("strIngredient") && meal[key])
//         .map((key) => meal[key] as string),
//       strMeasure: Object.keys(meal)
//         .filter((key) => key.startsWith("strMeasure") && meal[key])
//         .map((key) => meal[key] as string),
//       isSaved: false
//     }));
//   }
// )

export const { saveRecipe, deleteRecipe, syncSavedCards, updateSearchedCards } = mainSlice.actions;

export const selectSavedCards = (state: RootState) => state.mainSlice.SavedCards;
export const selectSearchedCards = (state: RootState) => state.mainSlice.SearchedCards;

export default mainSlice.reducer;