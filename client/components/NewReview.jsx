import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REVIEW_WAS_POSTED_TRUE } from '../reducers/reviewReducers';

const NewReview = (props) => {
  const { reviewPosted } = useSelector((state) => state.reviews)
  const dispatch = useDispatch();

  function handlePostReview() {
    const reviewText = document.getElementById('reviewText');
    const reviewUser = document.getElementById('reviewUser');
    // console.log('req body i think: ', { userName: reviewUser, text: reviewText })
    // console.log('id', props.id);
    fetch(`http://localhost:3000/reviews/${props.id}`, {
      method: 'POST',
      body: JSON.stringify({
        trailId: props.id,
        review: { userName: reviewUser.value, text: reviewText.value }
      }),
      headers: { 'Content-type': 'application/json' },
    })
      .then(() => {

        //clear input fields
        reviewText.value = '';
        reviewText.placeholder = 'Type your review here...';
        reviewUser.value = '';

        //tell store that review was posted so review list can update
        dispatch(REVIEW_WAS_POSTED_TRUE());
      });
  }

  return (
    <div>
      <label htmlFor='reviewText'>Leave a Review:</label><br />
      <textarea type='text' id='reviewText' placeholder='Type your review here...' rows='8' cols='50' /><br />
      <label htmlFor='reviewUser'>Username:</label><br />
      <input type='text' id='reviewUser' /><br />
      <input onClick={handlePostReview} id='submitButton' type='submit' value='Post Review' />
    </div>
  );
}

export default NewReview;