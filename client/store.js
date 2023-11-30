import { configureStore } from '@reduxjs/toolkit';
import slice from './reducers/reducer.js';
import reviewSlice from './reducers/reviewReducers.js';
import loadSlice from './reducers/loadingReducer.js';

export const store = configureStore({
  reducer: {
    list: slice,
    reviews: reviewSlice,
    load: loadSlice,
  },
});

export default store;
