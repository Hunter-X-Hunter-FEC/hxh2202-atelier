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
import Request from '../Request.js';



function Overview(props) {

  var [styleIdx, setStyleIdx] = useState(0);
  var [imageIdx, setImageIdx] = useState(0);
  var [stock, setStock] = useState(props.product.style[0]);


  var chosenStyle = function (e) { // changes the image galley picture AND sets'n'resets indicator for the curr selected style with id
    e.preventDefault();

    for (var n = 0; n <= props.product.style.length; n++) {
      if (document.getElementById(`S${n}`)) {
        document.getElementById(`S${n}`).style.border = 'solid black';
      }
    }

    document.getElementById(e.target.id).style.borderBottom = '8px solid LightSkyBlue';

    if (images[e.target.dataset.idx] === undefined) {
      setImageIdx(0);
      setStyleIdx(0);
      setStock(props.product.style[0]);
    } else if (styleIdx === parseInt(e.target.dataset.idx)) {
      return 0;
    } else {
      setImageIdx(0);
      setStyleIdx(parseInt(e.target.dataset.idx));
      setStock(props.product.style[parseInt(e.target.dataset.idx)]);
    }

  }

  return (
    <section id='Overview' style={{ width: '1440px', margin: '0 auto', fontSize: '18px' }}>
      <ImageGallery product={props.product} styleIdx={styleIdx} setStyleIdx={setStyleIdx} imageIdx={imageIdx} setImageIdx={setImageIdx} chosenStyle={chosenStyle} />
      <AverageReview starsIndex={props.starsIndex} />
      <ProductInfo product={props.product} />
      <Share />
      <StyleSelector product={props.product} styleIdx={styleIdx} setStyleIdx={setStyleIdx} chosenStyle={chosenStyle} />
      <AddToCart product={props.product} stock={stock} />
      <ProductDescription product={props.product} />
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