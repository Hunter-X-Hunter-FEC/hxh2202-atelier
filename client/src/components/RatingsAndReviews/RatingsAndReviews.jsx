import React from 'react'
import ReviewsList from '../Reviews/ReviewsList.jsx';
import Ratings from '../Ratings/Ratings.jsx';
import WriteReview from './WriteReview.jsx';
import styled from 'styled-components';
import App from '../../index.js';

// const ReviewContainer = styled.div`
//   heights: 100vh;
//   weights: auto;
//   flex: 1;
//   border: solid black;
//   font-family:sans-serif;
//   `

// render each individual review "card"
const RatingsAndReviews = (props) => {

  return (
    <>
      <div><Ratings product={props.product}/></div>
      <div>
        <ReviewsList product={props.product}/>
        <WriteReview product={props.product} showModal={props.showModal} setShowModal={props.setShowModal}/>
      </div>
    </>
  )
};

export default RatingsAndReviews;