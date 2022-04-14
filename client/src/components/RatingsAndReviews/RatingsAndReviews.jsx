import React from 'react'
import ReviewsList from '../Reviews/ReviewsList.jsx';
import Ratings from '../Ratings/Ratings.jsx';
import WriteReview from './WriteReview.jsx';
import styled from 'styled-components';
import App from '../../index.js';

const RatingsAndReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  font-family:sans-serif;
  `

  const ReviewsStyle = styled.div`
  height: 33vh;
  width: 100vw;
  flex:1
  `

  const RatingStyle = styled.div`
  height: 33vh;
  width: 100vw;
  flex:1
  `


  const WriteReviewStyle = styled.div`
  height: 33vh;
  width: 100vw;
  flex:1
  `
// render each individual review "card"
const RatingsAndReviews = (props) => {

  return (
    <>
      <RatingsAndReviewsContainer>
        <div>
          <Ratings product={props.product}/>
        </div>
        <div>
          <ReviewsList product={props.product}/>
          <WriteReview product={props.product} showModal={props.showModal} setShowModal={props.setShowModal}/>
        </div>
      </RatingsAndReviewsContainer>
    </>
  )
};

export default RatingsAndReviews;