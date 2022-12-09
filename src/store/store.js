import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../store/articles';
import authReducer from '../store/auth';

export const store = configureStore({
  reducer: {
    articlesReducer,
    authReducer
  },
});
