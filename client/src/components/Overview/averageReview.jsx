/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
average review
just an image of those 5 stars but the image changes depending on the average review number
*/

import React from "react";
import { render } from "react-dom";
import { Button } from "./averageReviewStyle.js";



function AverageReview() {

  var clickedScroll = function (e) {
    e.preventDefault();
    console.log('scroll to reviews')
  }


  return (
    <section style={AverageReviewStyle} id='AverageReview'>

      <img style={{ width: '100px',  height: '19px'}} alt="stars/stars" src={starsArr[2]} />
      <Button onClick={(e) => {clickedScroll(e);} } >Read all reviews</Button>

    </section>
  )
}

export default AverageReview;

var AverageReviewStyle = { // initial #styleList css and gets reused with each re-render, but doesn't work????
  width: 200,
  // display: 'inline-block',
  display: 'flex',
  // textAlign: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: 'transparent',
  padding: '10px',
  margin: '10px',
};

var starsArr = [
  '../src/assets/star0.png',
  '../src/assets/star1.png',
  '../src/assets/star2.png',
  '../src/assets/star3.png',
  '../src/assets/star4.png',
  '../src/assets/star5.png',
  '../src/assets/star6.png',
  '../src/assets/star7.png',
  '../src/assets/star8.png',
  '../src/assets/star9.png',
  '../src/assets/star10.png',
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

