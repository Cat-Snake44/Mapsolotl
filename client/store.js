import { configureStore } from '@reduxjs/toolkit';
import slice from './reducers/reducer.js';
import reviewSlice from './reducers/reviewReducers.js'

export const store = configureStore({
  reducer: {
    list: slice,
    reviews: reviewSlice
  },
});

export default store;
