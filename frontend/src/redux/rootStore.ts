import { configureStore } from '@reduxjs/toolkit';
import reducers from './rootReducer';

const store = configureStore({
    reducer: reducers,
});

export default store;
