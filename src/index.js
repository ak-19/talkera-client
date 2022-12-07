import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Application from './application';

createRoot(document.getElementById('root')).render(<Provider store={store}> <Application /> </Provider>);
