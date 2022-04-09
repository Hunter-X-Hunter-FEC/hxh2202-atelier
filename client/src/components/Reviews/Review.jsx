import React from 'react'
import ReviewsList from './ReviewsList.jsx';
import styled from 'styled-components';

// render each individual review "card"
const Review = (props) => {

  const ReviewContainer = styled.div`
  heights: 100vh;
  weights: auto;
  flex: 1;
  border: solid black;
  font-family:sans-serif;
  `

  const ProductCategory = styled.div`
  margin-top:5px;
  height:24px;
  margin-bottom:6px;
  `
  const ProductName = styled.h4`
  margin-top:5px;
  height:24px;
  margin-bottom:6px;
  `
  const ProductPrice = styled.p`
  margin-top:5px;
  margin-bottom:10px;
  `
  const ProductRating = styled.div`
  margin-bottom: 2px;
  padding-top:5px;
  `



  return (
    <ReviewContainer>
      <p>Rating: {props.review.rating}</p>
      <p>Title: {props.review.summary}</p>
      <p>Review Text: {props.review.body}</p>
    </ReviewContainer>
  )
};

export default Review;