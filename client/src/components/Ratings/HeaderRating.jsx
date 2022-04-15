import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';
import Ratings from './Ratings.jsx';

// import { averageRating, ones } from './oneMeta.js';

const HeaderRatingContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 2fr 1fr 1fr
`;

const NumberStyle = styled.div`
  font-size: 100px;
`;

var ratingAverage = (distribution) => {
  const data = {};
    let total = 0;
    let weightedSum = 0;

    for (let i = 0; i < 5; i++) {
      const distributionValue = distribution?.[i + 1] || "0";
      data[i + 1] = distributionValue;
      total = total + parseInt(distributionValue);
      weightedSum = weightedSum + (parseInt(distributionValue) * (i+1))
    }
    let avgRating = weightedSum / total;


    return avgRating;
}

const HeaderRating = ({ distribution, setStarsIndex }) => {


  const average = ratingAverage(distribution);
  const averageRounded = Math.round(average * 100) / 100


  return (
    <div>
      <div style={{align: 'center'}}>RATINGS AND REVIEWS</div>
      <HeaderRatingContainer>
        <NumberStyle>{averageRounded}</NumberStyle>
        <Stars rating={averageRounded} isReadOnly onClick={(rating) => console.log('The rating', rating)}/>
      </HeaderRatingContainer>
    </div>
  )
}

export default HeaderRating;