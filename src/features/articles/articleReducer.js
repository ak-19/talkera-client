import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getArticles, getFeed } from '../../api'

const initialState = {
    articles: [],
    feed: [],
    articlesCount: 0,
    feedCount: 0
}

export const retrieveArticles = createAsyncThunk(
    'articles/retrieveArticles',
    async () => {
        const response = await getArticles()
        return response.data
    }
)

export const retrieveFeed = createAsyncThunk(
    'articles/retrieveFeed',
    async () => {
        const response = await getFeed()
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
        }).addCase(retrieveFeed.fulfilled, (state, action) => {
            const { articles, articlesCount } = action.payload;
            state.feed = articles;
            state.feedCount = articlesCount;
        })
    },
})

export default artclesSlice.reducer;