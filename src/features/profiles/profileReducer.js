import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProfiles } from "../../api";

const initialState = {
    profiles: [],
    error: null
}

export const getProfiles = createAsyncThunk(
    'articles/getProfiles',
    async (formData) => {
        const response = await getAllProfiles(formData);
        return response.data;
    }
)

const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfiles.fulfilled, (state, action) => {
                const profiles = action.payload;
                if (profiles) {
                    state.profiles = profiles;
                    state.error = null;
                }
            }).addCase(getProfiles.rejected, (state, { error }) => {
                state.error = 'get profiles failed';
            })
    },
});

export const { clearError } = profilesSlice.actions;

export default profilesSlice.reducer;