import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REVIEW_WAS_POSTED_FALSE } from '../reducers/reviewReducers';

const ReviewsList = (props) => {
  const [reviews, setReviews] = useState([]); //state to hold reviews
  const { reviewPosted } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  async function getReviews() {
    let newReviews = [];

    const response = await fetch(`http://localhost:3000/reviews/${props.id}`, {
      method: 'GET',
    });
    const JSONresponse = await response.json();
    JSONresponse.map((reviewObj) => {
      newReviews.push(
        <dl>
          <dt id={reviewObj._id}>
            {reviewObj.review.userName}{' '}
            <span style={{ fontWeight: '200' }}>says...</span>
          </dt>
          <dd style={{ fontWeight: '200' }}>{reviewObj.review.text}</dd>
        </dl>
      );
    });
    setReviews(newReviews);
  }

  // load current reviews on intial render
  useEffect(() => {
    getReviews();
  }, []);

  // load reviews again when new review is posted and reset state in store tracking whether review was posted
  useEffect(() => {
    getReviews();
    dispatch(REVIEW_WAS_POSTED_FALSE());
  }, [reviewPosted]);

  return (
    <div>
      <h3>Reviews For This Trail:</h3>
      <div id='reviewsList'>{reviews}</div>
    </div>
  );
};

export default ReviewsList;
