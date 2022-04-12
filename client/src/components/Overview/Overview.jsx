/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/29/22
overview
get request to /products, /products/:products_id, /products/:product_id/styles, /products:product_id/related --> do we need different get requests for all these?
overview gets product details and ID from App's product catalog
*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import ImageGallery from './imageGallery.jsx';
import AverageReview from './averageReview.jsx';
import ProductInfo from './productInfo.jsx';
import Share from './share.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';
import ProductDescription from './productDescription.jsx';
// import { changeOverviewStars } from '../Overview/averageReview.jsx';
import Request from '../Request.js';



function Overview(props) {

  var [styleIdx, setStyleIdx] = useState(0);
  var [imageIdx, setImageIdx] = useState(0);

  // console.log(props.product);

  var [stock, setStock] = useState(props.product.style[0]);
  // console.log(props.product.style[stockIdx].skus);



  var chosenStyle = function (e) {
    e.preventDefault();
    console.log('clicked a style list');

    if (images[e.target.dataset.value] === undefined) {
      setImageIdx(0);
      setStyleIdx(0);
      setStock(props.product.style[0]);
    } else if (styleIdx === parseInt(e.target.dataset.value)) {
      return 0;
    } else {
      setImageIdx(0);
      setStyleIdx(parseInt(e.target.dataset.value));
      setStock(props.product.style[parseInt(e.target.dataset.value)]);
    }
  }

  // console.log(stock);


  return (
    <section id='Overview' style={{ backgroundColor: 'AliceBlue', width: '1440px', margin: '0 auto' }}>
      <ImageGallery product={props.product} styleIdx={styleIdx} setStyleIdx={setStyleIdx} imageIdx={imageIdx} setImageIdx={setImageIdx} chosenStyle={chosenStyle}/>
      <AverageReview starsIndex={props.starsIndex}/>
      <ProductInfo product={props.product} />
      <Share />
      <StyleSelector product={props.product} styleIdx={styleIdx} setStyleIdx={setStyleIdx} chosenStyle={chosenStyle}/>
      <AddToCart product={props.product} stock={stock}/>
      <ProductDescription product={props.product}/>
    </section>
  );
}

export default Overview;


var images = [
  ['./public/desg1.jpg', './public/desg2.jpg', './public/desg3.jpg'],
  ['./public/flower1.jpg', './public/flower2.jpg', './public/flower3.jpg'],
  ['./public/food1.jpg', './public/food2.jpg', './public/food3.jpg'],
  ['./public/sport1.jpg', './public/sport2.jpg', './public/sport3.jpg']
];

// SOOO UNNESSERY becuase Dora's index already HANDLED IT ALL AAAAAHHHHHHHHHHHHH SO MUCH TIME WASTED
  // var [fullProduct, setFullProduct] = useState({});

  // var funcFetch = function () {
  //   Request.getProductDetails(props.product.id).then((d) => {
  //     // console.log(d)
  //     setFullProduct(d.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // };



  // useEffect(() => {
  //   funcFetch();
  // }, []);

  // useEffect(() => {
  //   setFullProduct(fullProduct);
  // }, [fullProduct]);


/*
  the communication between RatingsAndReviews and Overview so that the stars
  in Overview will be the same as in RatingsAndReviews, Overview reads the
  starsIndex through props and RatingsAndReviews invokes setStarsIndex also
  through props
  */
  // var [starsIndex, setStarsIndex] = useState(0);