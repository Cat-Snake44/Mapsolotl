import React, { useState, useEffect } from 'react';

const NewReview = (props) => {

  function handlePostReview() {
    const reviewText = document.getElementById('reviewText').value;
    const reviewUser = document.getElementById('reviewUser').value;
    // console.log('req body i think: ', { userName: reviewUser, text: reviewText })
    // console.log('id', props.id);
    fetch(`http://localhost:3000/reviews/${props.id}`, {
      method: 'POST',
      body: JSON.stringify({
        trailId: props.id,
        review: { userName: reviewUser, text: reviewText }
      }),
      headers: { 'Content-type': 'application/json' },
    })
    // .then(() => {
    //   dispatch(newReviewPostedTrue)
    // })
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