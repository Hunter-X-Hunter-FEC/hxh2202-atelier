import React from 'react'
import ReviewsList from '../Reviews/ReviewsList.jsx';
import Ratings from '../Ratings/Ratings.jsx';
import WriteReview from './WriteReview.jsx';
import styled from 'styled-components';
import App from '../../index.js';

const ReviewContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  border: solid black;
  font-family:sans-serif;
  flex-direction: column;
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
    <ReviewContainer>
      <RatingStyle>
        <Ratings product={props.product}/>
      </RatingStyle>
      <ReviewsStyle>
        <ReviewsList product={props.product}/>
      </ReviewsStyle>
      <WriteReviewStyle>
        <WriteReview product={props.product} showModal={props.showModal} setShowModal={props.setShowModal}/>
      </WriteReviewStyle>
    </ReviewContainer>
  )
};

export default RatingsAndReviews;