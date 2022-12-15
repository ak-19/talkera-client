import { configureStore } from '@reduxjs/toolkit';

import articles from '../features/articles/articleReducer'
import authentication from '../features/authentication/authReducer'

const store = configureStore({
    reducer: {
        articles,
        authentication
    }
})

export default store;