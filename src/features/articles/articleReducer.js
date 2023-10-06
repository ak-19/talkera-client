import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createArticle, getArticleBySlug, getArticles, getFeed } from '../../api'

const initialState = {
    article: null,
    articles: [],
    feed: [],
    articlesCount: 0,
    feedCount: 0,
    error: null
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

export const makeArticle = createAsyncThunk(
    'articles/makeArticle',
    async (formData) => {
        const response = await createArticle(formData)
        return response.data
    }
)

export const getBySlug = createAsyncThunk(
    'articles/getBySlug',
    async (slug) => {
        const response = await getArticleBySlug(slug)
        return response.data
    }
)

const artclesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(retrieveArticles.fulfilled, (state, action) => {
            const { articles, articlesCount } = action.payload;
            state.articles = articles;
            state.articlesCount = articlesCount;
            state.error = null;
        }).addCase(retrieveFeed.fulfilled, (state, action) => {
            const { articles, articlesCount } = action.payload;
            state.feed = articles;
            state.feedCount = articlesCount;
            state.error = null;
        }).addCase(makeArticle.fulfilled, (state, action) => {
            const { article } = action.payload;
            state.article = article;
            state.articles.push(article);
            state.articlesCount++;
            state.error = null;
        }).addCase(makeArticle.rejected, (state, action) => {
            state.error = 'Creation of article failed';
        }).addCase(getBySlug.fulfilled, (state, action) => {
            const { article } = action.payload;
            state.article = article;
            state.error = null;
        }).addCase(getBySlug.rejected, (state, action) => {
            state.error = 'Getting of article by slug failed';
        })
    },
})

export const { clearError } = artclesSlice.actions;

export default artclesSlice.reducer;