import React from 'react'
import oneReview from '../common/oneReview.js'
import Review from './Review.jsx';

// render each individual review "card"
const ReviewsList = () => {
  oneReview.results.map((result) => {
//<Review {...result} />
//<Review id={result.id}
// Old result === result
    return <Review result={result}/>
  })
}