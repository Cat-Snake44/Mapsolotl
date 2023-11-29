import { createSlice } from '@reduxjs/toolkit';

const reviewPostedState = {
  reviewPosted: false
}

const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState: reviewPostedState,
  reducers: {
    REVIEW_WAS_POSTED_TRUE: (state, action) => {
      console.log('REVIEW_WAS_POSTED_TRUE triggered'),
        state.reviewPosted = true;
    },
    REVIEW_WAS_POSTED_FALSE: (state, action) => {
      console.log('REVIEW_WAS_POSTED_FALSE triggered')
      state.reviewPosted = false;
    }
  }
});

export const { REVIEW_WAS_POSTED_TRUE, REVIEW_WAS_POSTED_FALSE } = reviewSlice.actions;
export default reviewSlice.reducer;