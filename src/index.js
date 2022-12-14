import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Application from './application';


export const store = configureStore({
    reducer: {
    },
});

createRoot(document.getElementById('root')).render(<Provider store={store}> <Application /> </Provider>);
