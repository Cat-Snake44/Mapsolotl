import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReviewsList = (props) => {

  const [reviews, setReviews] = useState([]); //state to hold reviews
  const { isNewReviewPosted, setIsNewReviewPosted } = useState(false);


  async function getReviews() {
    let newReviews = [];

    const response = await fetch(`http://localhost:3000/reviews/${props.id}`, {
      method: 'GET'
    });
    const JSONresponse = await response.json();
    JSONresponse.map((reviewObj) => {
      newReviews.push(
        <dl>
          <dt id={reviewObj._id}>
            {reviewObj.review.userName} <span style={{ fontWeight: '200' }}>says...</span>
          </dt>
          <dd style={{ fontWeight: '200' }}>
            {reviewObj.review.text}
          </dd>
        </dl>
      )
    });
    setReviews(newReviews);
  }

  useEffect(() => {
    getReviews();
  }, [])

  // useEffect(() => {
  //   getReviews();
  //   dispatch(setIsNewReviewPosted(false));
  // }, isNewReviewPosted)

  return (
    <div>
      <h3>Reviews For This Trail:</h3>
      <div id='reviewsList'>
        {reviews}
      </div>
    </div>
  );
}

export default ReviewsList;