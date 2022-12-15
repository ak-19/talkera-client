import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api";

const initialState = {
    user: null,
    authenticated: false
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
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            const { user } = action.payload;
            if (user) {
                state.user = user;
                state.authenticated = true;
            }
        })
    },
});


export default authenticationSlice.reducer;