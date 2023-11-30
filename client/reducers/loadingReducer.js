import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false };

const loadSlice = createSlice({
  name: 'loaderSlice',
  initialState: initialState,
  reducers: {
    IS_LOADING_TRUE: (state, action) => {
      console.log('IS_LOADING_TRUE triggered');
      state.isLoading = true;
    },
    IS_LOADING_FALSE: (state, action) => {
      console.log('IS_LOADING_FALSE triggered');
      state.isLoading = false;
    },
  },
});

export const { IS_LOADING_TRUE, IS_LOADING_FALSE } = loadSlice.actions;
export default loadSlice.reducer;
