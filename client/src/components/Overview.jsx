//'something'
import React, {useState, useEffect} from 'react';

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