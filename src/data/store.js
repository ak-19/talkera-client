import { configureStore } from '@reduxjs/toolkit';

import articles from '../features/articles/articleReducer'

const store = configureStore({
    reducer: {
        articles
    }
})

export default store;