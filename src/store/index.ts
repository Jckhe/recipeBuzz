import { configureStore } from '@reduxjs/toolkit';

// import your reducers here
import mainSlice from './slices/mainSlice';

const store = configureStore({
  reducer: {
    // add your reducers to the store here
    mainSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
