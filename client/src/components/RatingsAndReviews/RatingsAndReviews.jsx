import React from 'react'
import ReviewsList from '../Reviews/ReviewsList.jsx';
import Ratings from '../Ratings/Ratings.jsx';
import styled from 'styled-components';

// render each individual review "card"
const RatingsAndReviews = (props) => {

  const ReviewContainer = styled.div`
  heights: 100vh;
  weights: auto;
  flex: 1;
  border: solid black;
  font-family:sans-serif;
  `

  // const ProductCategory = styled.div`
  // margin-top:5px;
  // height:24px;
  // margin-bottom:6px;
  // `
  // const ProductName = styled.h4`
  // margin-top:5px;
  // height:24px;
  // margin-bottom:6px;
  // `
  // const ProductPrice = styled.p`
  // margin-top:5px;
  // margin-bottom:10px;
  // `
  // const ProductRating = styled.div`
  // margin-bottom: 2px;
  // padding-top:5px;
  // `

  return (
    <>
      <div><Ratings product={props.product}/></div>
      <div><ReviewsList product={props.product}/></div>
    </>
  )
};

export default RatingsAndReviews;