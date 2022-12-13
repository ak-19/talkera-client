import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from '../api/index';

const initialState = { authData: null };

export const loginData = createAsyncThunk(
  'auth/login',
  async (formData) => {
    const response = await login(formData);
    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    return null;
  }
);

export const selectAuthData = (state) => {
  return state.articlesReducer?.authData;
}

export const authSlice = createSlice({
  name: 'authProvider',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginData.pending, (state) => {
        state.authData = null;
      })
      .addCase(loginData.fulfilled, (state, action) => {
        localStorage.setItem('current_user', JSON.stringify({ ...action?.payload }));
        state.authData = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        localStorage.removeItem('current_user');
        state.authData = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        localStorage.removeItem('current_user');
        state.authData = null;
      });
  },
});

export default authSlice.reducer;