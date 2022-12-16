import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api";

const initialState = {
    user: localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')) : null,
    authenticated: localStorage.getItem('current_user') !== null,
    error: null
}

export const loginUser = createAsyncThunk(
    'articles/loginUser',
    async (formData) => {
        const response = await login(formData);
        return response.data;
    }
)

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        clearAuthenticationError(state) {
            state.error = null;
        },
        logoutUser(state) {
            state.user = null;
            localStorage.clear();
            state.authenticated = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                const { user } = action.payload;
                if (user) {
                    state.user = user;
                    localStorage.setItem('current_user', JSON.stringify(user))
                    state.authenticated = true;
                    state.error = null;
                }
            }).addCase(loginUser.rejected, (state, { error }) => {
                console.log(error);
                state.error = 'Login failed';
            })
    },
});

export const { clearAuthenticationError, logoutUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;