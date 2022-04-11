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
import { changeOverviewStars } from '../Overview/averageReview.jsx';
import Request from '../Request.js';



function Overview(props) {

  return (
    <section id='Overview' style={{ backgroundColor: 'AliceBlue' }}>
      <ImageGallery product={props.product} />
      <AverageReview />
      <ProductInfo product={props.product} />
      <Share />
      <StyleSelector product={props.product} />
      {/* <StyleSelector product={props.product} func={ImageGallery} /> */}
      <AddToCart product={props.product} />
      <ProductDescription product={props.product}/>
    </section>
  );
}

export default Overview;



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
