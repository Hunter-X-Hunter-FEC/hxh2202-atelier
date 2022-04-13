import React, { useState } from 'react';
import styled from 'styled-components'

// component for static, partially unfilled stars.
const Stars = (props) => {

  const [rating, setRating] = useState(props.rating)

  const empty = <span>&#9734;</span>
  const stars = [];
  const decimal = props.rating % 1;
  const integer = parseInt(props.rating);

  for (let i = 0; i < 5; i++) {
    if (i < integer) {
      stars[i] = <span key={`${i}full`}>&#9733;</span>;
    } else {
      stars[i] = <span key={`${i}empty`}>&#9734;</span>;
    }
  }

  if (decimal > 0) {
    if (decimal < 0.26) {
      stars[integer] =
        <div id='quarterStar'
          style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', zIndex: 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '25%', zIndex: 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    } else if (decimal < 0.75) {
      stars[integer] =
        <div id='halfStar'
          style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', zIndex: 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '52%', zIndex: 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    } else {
      stars[integer] =
        <div id='threeQuarterStar'
          style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', zIndex: 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '65%', zIndex: 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    }
  }

  return (
    <div id='staticStars'>{stars}</div>
  );
}

export default Stars;