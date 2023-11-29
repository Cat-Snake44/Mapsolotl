import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewReview from './NewReview.jsx';
import ReviewsList from './ReviewsList.jsx';

const MoreInfo = (props) => {
  const moreInfo = useSelector((store) => store.list.moreInfo);
  if (moreInfo[props.id]) {
    return (
      <div className='more-info'>
        <div className='description'>
          <h3>
            Description:
            <span>{moreInfo[props.id].description || 'N/A'}</span>
          </h3>
        </div>
        <div className='directions'>
          <h3>
            Directions:<span>{moreInfo[props.id].directions || 'N/A'}</span>
          </h3>
        </div>
        <div className='reviews'>
          <ReviewsList id={props.id} />
          <NewReview id={props.id} />
        </div>
      </div>
    );
  } else return <div></div>;
};

export default MoreInfo;
