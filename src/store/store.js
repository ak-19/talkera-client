import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../store/articles';

export const store = configureStore({
  reducer: {
    articlesReducer,
  },
});
