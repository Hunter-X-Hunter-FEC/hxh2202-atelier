/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
average review
just an image of those 5 stars but the image changes depending on the average review number
*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function AverageReview(props) {

  var index = props.starsIndex || 0;

  var clickedViewAll = function (e) {
    e.preventDefault();
    console.log('scroll to reviews')
  }



  return (
    <section style={AverageReviewStyle} id='AverageReview'>

      <img style={{ width: '100px',  height: '19px'}} alt="stars/stars" src={starsArr[index]} />
      <Button onClick={(e) => {clickedViewAll(e);} } >Read all reviews</Button>

    </section>
  )
}

export default AverageReview;



var Button = styled.button`
width: 123;
display: flex;
text-align: center;
background-color: transparent;
border: transparent;
&:hover {
  color: blue;
  font-weight: bold;
}
`;

var AverageReviewStyle = {
  width: 400,
  // display: 'inline-block',
  display: 'flex',
  // textAlign: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: 'solid black',
  padding: '10px'
};

var starsArr = [
  './public/star0.png',
  './public/star1.png',
  './public/star2.png',
  './public/star3.png',
  './public/star4.png',
  './public/star5.png',
  './public/star6.png',
  './public/star7.png',
  './public/star8.png',
  './public/star9.png',
  './public/star10.png',
]

{/* <img style={imageFullscreen} alt="current image" src={images[styleIdx][imageIdx]}/> */}


// var chosenStyle = function (e) {
//   if (styleIdx === parseInt(e.target.dataset.value)) return 0;
//   e.preventDefault();
//   setImageIdx(0);
//   setStyleIdx(parseInt(e.target.dataset.value)); // doesn't re-render whyyyyyyyy
//   // forceUpdate(); // to reset the CSS for the style list
//   // document.getElementById(e.target.id).style.borderBottom = "5px solid red";
// }

