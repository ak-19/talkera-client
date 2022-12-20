import { configureStore } from '@reduxjs/toolkit';

import articles from '../features/articles/articleReducer'
import authentication from '../features/authentication/authReducer'
import profiles from '../features/profiles/profileReducer'

const store = configureStore({
    reducer: {
        articles,
        authentication,
        profiles
    }
})

export default store;