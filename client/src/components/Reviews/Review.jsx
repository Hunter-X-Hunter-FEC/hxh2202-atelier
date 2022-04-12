import React, { useState } from 'react';
import ReviewsList from './ReviewsList.jsx';
import styled from 'styled-components';
import Stars from '../Ratings/Stars.jsx'

const ReviewContainer = styled.div`
heights: 100vh;
weights: auto;
flex: 1;
border: solid black;
font-family:sans-serif;
`
const ReviewerName = styled.div`
background-color: green;
font-weight: none;
`
const ReviewTitle = styled.div`
font-size: 1.2em;
font-weight: bold;
height:24px;
margin-bottom:6px;
`
const ReviewText = styled.h4`
background-color: blue;
font-weight: none;
`

const ReviewRecommendedProduct = styled.div`
background-color: orange;
font-weight: none;
`

const ReviewResponse = styled.div`
background-color: pink;
font-weight: none;
`
const ReviewHelpfulness = styled.div`
background-color: tan;
font-weight: none;
`

// render each individual review "card"
const Review = (props) => {

  console.log('props inside of Review: ', props);

  const [hasClicked, setHasClicked] = useState(!!localStorage.getItem(`helpful-${props.review.review_id}`))

  const clickedHelpful = () => {
    if (!hasClicked) {
      console.log('helpful was just clicked inside Review.jsx');
      localStorage.setItem(`helpful-${props.review.review_id}`, true.toString())
      setHasClicked(true)
    }
  }

  return (
    <ReviewContainer>
      <Stars rating={props.review.rating} isReadOnly/>
      <ReviewerName>
        Reviewer Name: {props.review.reviewer_name}
      </ReviewerName>
      <ReviewTitle>
        Review Title: {props.review.summary}
      </ReviewTitle>
      <ReviewText>
        Review Body: {props.review.body}
      </ReviewText>
      <ReviewRecommendedProduct>
        {props.review.recommend ? "I recommend this product" : null}
      </ReviewRecommendedProduct>
      <ReviewResponse>
        Review Response {props.review.response}
      </ReviewResponse>
      <ReviewHelpfulness>
        Helpful? <button onClick={clickedHelpful}>Yes</button>  {props.review.helpfulness + (hasClicked ? 1: 0)}
      </ReviewHelpfulness>
    </ReviewContainer>
  )
};

export default Review;