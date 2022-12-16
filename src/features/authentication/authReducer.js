import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api";

const initialState = {
    user: null,
    authenticated: false,
    error: null
}

export const loginUser = createAsyncThunk(
    'articles/loginUser',
    async (formData) => {
        const response = await login(formData);
        return response.data;
    }
)

export const logoutUser = (state) => {
    state.user = null;
    state.authenticated = false;
    state.error = null;
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        clearAuthenticationError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                const { user } = action.payload;
                if (user) {
                    state.user = user;
                    state.authenticated = true;
                    state.error = null;
                }
            }).addCase(loginUser.rejected, (state, { error }) => {
                console.log(error);
                state.error = 'Login failed';
            })
    },
});

export const { clearAuthenticationError } = authenticationSlice.actions;


export default authenticationSlice.reducer;