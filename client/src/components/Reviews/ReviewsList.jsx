import React from 'react';
import {useState, useEffect} from 'react';
// import oneReview from '../common/oneReview.js'
import Review from './Review.jsx';
const request = require('../Request.js')

// render each individual review "card"
const ReviewsList = () => {
  const [allReviewsOfProduct, setReviewsOfProduct] = useState([])

  useEffect(() => {
    console.log('ReviewsList useEffect is working');
    const fetchReviews = async() => {
      const allReviewsOfProduct = await request.getReviews()
      console.log('allReviewsOfProduct: ', allReviewsOfProduct);
      setReviewsOfProduct(allReviewsOfProduct);
    }

    fetchReviews()

  }, [])
// console.log(request.getReviews(65631))

useEffect(()=>{
  localStorage.setItem('reviews', JSON.stringify(allReviewsOfProduct))
}, [allReviewsOfProduct])

// allReviewsOfProduct.data.map((review) => {
//   return <Review review={review}/>
// }
// )

return (
  <>
    {
      console.log(allReviewsOfProduct.data)
      // allReviewsOfProduct..map((review) => {
      //   return <Review review={review}/>;
      // })
    }
    {/* <Review review={allReviewsOfProduct.data.results[0]}/> */}
    <Review />
  </>
)
// return allReviewsOfProduct;
}

export default ReviewsList;