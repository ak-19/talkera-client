import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getArticles } from '../api'

const initialState = {
    articles: [],
    articlesCount: 0
}

export const retrieveArticles = createAsyncThunk(
    'articles/retrieveArticles',
    async () => {
        const response = await getArticles()
        return response.data
    }
)

const artclesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(retrieveArticles.fulfilled, (state, action) => {
            const { articles, articlesCount } = action.payload;
            state.articles = articles;
            state.articlesCount = articlesCount;
        })
    },
})



export default artclesSlice.reducer;