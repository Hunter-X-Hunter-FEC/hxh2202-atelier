import React from 'react';
import { useState, useEffect } from 'react';
// import oneReview from '../common/oneReview.js'
import Review from './Review.jsx';
import Ratings from '../Ratings/Ratings.jsx'
const request = require('../Request.js')

// render each individual review "card"
const ReviewsList = (prop) => {
  const [reviewPages, setReviewPages] = useState({ page: 1, reviews: [], count: 0, isLastPage: false })
  const [sliceEnd, setSliceEnd] = useState(2)

  useEffect(() => {
    // console.log('ReviewsList useEffect is working');
    const fetchReviews = async() => {
      // const reviews = {}
      const { data } = await request.getReviews(prop.product.id)
      const reviews = {
        page: 1,
        reviews: data.results,
        count: data.count
      }
      setReviewPages(reviews);

    }

    fetchReviews()

  }, [])

  const reviewsToShow = async () => {
    const newEnd = sliceEnd + 2
    setSliceEnd(newEnd);
    if (newEnd >= reviewPages.count - 2) {
      const { data } = await request.getReviews(prop.product.id, reviewPages.page + 1)

      const newReviews = reviewPages.reviews.concat(data.results)
      const newCount = reviewPages.count + data.count
      const nextPageReviews = {
        page: reviewPages.page + 1,
        reviews: newReviews,
        count: newCount,
        isLastPage: newReviews.length < newCount
      }
      setReviewPages(nextPageReviews);
    }
  }

  return (
    <>

      <div>
        {
          reviewPages.reviews.slice(0, sliceEnd).map((review) => {

            return <Review key={review.review_id} review={review} />;
          })
        }
        {reviewPages.reviews.length === 0 || reviewPages.isLastPage ? null : <button onClick={reviewsToShow}>More Reviews</button>}
      </div>
    </>
  )
  // return allReviewsOfProduct;
  }

export default ReviewsList;