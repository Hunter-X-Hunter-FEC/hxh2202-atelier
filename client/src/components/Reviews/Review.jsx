import React, { useState } from 'react';
import ReviewsList from './ReviewsList.jsx';
import styled from 'styled-components';
import Stars from '../Ratings/Stars.jsx'
const request = require('../Request.js');

const ReviewContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  padding: 10px;
  padding-left: 0px;
  width: 80%;
  border-bottom: solid 	#D3D3D3;
  font-family: sans-serif;
`
const StarNameDateLine = styled.div`
  display: inline-grid;
  grid-template-columns: 3fr 1fr 1fr;
  font-size: 16px;
`

const ReviewerName = styled.div`
  text-align: right;
`

const ReviewDate = styled.div`
  font-weight: none;
`

const ReviewTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  height:24px;
  margin-bottom:6px;
`
const ReviewText = styled.h4`
  font-weight: none;
`

const ReviewRecommendedProduct = styled.div`
  font-weight: none;
`

const ReviewResponse = styled.div`
  background-color: grey;
`

const ReviewHelpfulness = styled.div`
  margin-top: 5px;
  display: flex;

`

const HelpfulnessButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
`

// render each individual review "card"
const Review = (props) => {
  const [hasClicked, setHasClicked] = useState(!!localStorage.getItem(`helpful-${props.review.review_id}`))

  const clickedHelpful = () => {
    if (!hasClicked) {
      localStorage.setItem(`helpful-${props.review.review_id}`, true.toString())
      setHasClicked(true)
      request.updateHelpfulness(props.review.review_id);
    }
  }

  return (
    <ReviewContainer>
      <StarNameDateLine>
        <Stars rating={props.review.rating} isReadOnly/>
        <ReviewerName>{props.review.reviewer_name}</ReviewerName>
        <ReviewDate>{props.review.date}</ReviewDate>
      </StarNameDateLine>
      <ReviewTitle>{props.review.summary}</ReviewTitle>
      <ReviewText>{props.review.body}</ReviewText>
      <ReviewRecommendedProduct>
        {props.review.recommend ? "I recommend this product" : null}
      </ReviewRecommendedProduct>
      <ReviewResponse>
        {props.review.response ? props.review.response : null}
      </ReviewResponse>
      <ReviewHelpfulness>
        <div>Helpful?</div>
        <HelpfulnessButton onClick={clickedHelpful}>Yes</HelpfulnessButton>
        <div>({props.review.helpfulness + (hasClicked ? 1 : 0)})</div>
      </ReviewHelpfulness>
    </ReviewContainer>
  )
};

export default Review;