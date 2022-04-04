import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

// const Styled

function RatingsAndReviews() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p>Your rating for this product is: {rating}</p>
      <button onClick={() => setRating(rating + 1)}>Increase Rating</button>
      <button onClick={() => setRating(rating - 1)}>Decrease Rating</button>
    </div>
  )
}

export default RatingsAndReviews;