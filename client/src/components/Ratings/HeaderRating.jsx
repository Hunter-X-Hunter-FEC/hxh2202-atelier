import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';
import Ratings from './Ratings.jsx';

// import { averageRating, ones } from './oneMeta.js';

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
    <>
      <div className="HeaderRating"> Header Rating Component Here </div>
      <div>Overall Rating: {averageRounded}</div>
      <Stars rating={averageRounded} isReadOnly onClick={(rating) => console.log('The rating', rating)}/>
    </>
  )
}

export default HeaderRating;