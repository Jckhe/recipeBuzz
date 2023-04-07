import { configureStore, createStore } from '@reduxjs/toolkit';
// import your reducers here
import mainSlice from './slices/mainSlice';
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
  reducer: {
    // add your reducers to the store here
    mainSlice
  },
});

const makeStore = () => {
  return configureStore({
    reducer: {
      mainSlice
    },
  });
};



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore);
export default store;