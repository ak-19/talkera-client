import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getArticles } from '../api/index'

const initialState = { articles: [] };

export const getArticlesData = createAsyncThunk(
  'articles/getArticles',
  async () => {
    const response = await getArticles();
    return response.data;
  }
);

export const selectArticles = (state) => {
  return state.articlesReducer?.articles?.articles || [];
}

export const articlesSlice = createSlice({
  name: 'articleProvider',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesData.pending, (state) => {
        state.articles = [];
      })
      .addCase(getArticlesData.fulfilled, (state, action) => {
        state.articles = action.payload;
      });
  },
});

export default articlesSlice.reducer;