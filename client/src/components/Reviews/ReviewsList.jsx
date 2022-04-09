import React from 'react';
import { useState, useEffect } from 'react';
// import oneReview from '../common/oneReview.js'
import Review from './Review.jsx';
import Ratings from '../Ratings/Ratings.jsx'
const request = require('../Request.js')

// render each individual review "card"
const ReviewsList = (prop) => {
  const [allReviewsOfProduct, setReviewsOfProduct] = useState([])

  useEffect(() => {
    console.log('ReviewsList useEffect is working');
    const fetchReviews = async() => {
      console.log('prop.product: ', prop.product);
      console.log('inside of ReviewsList.jsx, prop.product.id: ', prop.product.id)
      const allReviewsOfProduct = await request.getReviews(prop.product.id)
      const revs = await Promise.all(allReviewsOfProduct.data.results)
      console.log('allReviewsOfProduct: ', allReviewsOfProduct);
      setReviewsOfProduct(revs);
    }

    fetchReviews()

  }, [])
// console.log(request.getReviews(65631))

  useEffect(()=>{
    localStorage.setItem('reviews', JSON.stringify(allReviewsOfProduct))
  }, [allReviewsOfProduct])

  // const setReviews = ()=>{
  //   // console.log('all is triggering');
  //   setReviewsOfProduct(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : allReviewsOfProduct)
  // }

  return (
    <>
      {/* {
        console.log(allReviewsOfProduct)
      } */}
      <div>
        {/* <Ratings reviews={allReviewsOfProduct}/> */}
      </div>
      <div>
        {
          allReviewsOfProduct.map((review) => {
            return <Review key={review.review_id} review={review} />;
          })
        }
      </div>
      {/* <Review review={allReviewsOfProduct.data.results[0]}/> */}
      {/* <Review /> */}
    </>
  )
  // return allReviewsOfProduct;
  }

export default ReviewsList;