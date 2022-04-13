/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
image browser
the new stuff here like carosel
magnifier when hover over the <img/>
max 5 style list on render
arrow up and down re-renders style list to show next style and remove last style
the currently selected style list needs to have an underline indicator that it's selected
fullscreen button needs to be an animated CSS change???
*/

import React, { useState, useReducer, useEffect, forwardRef, useImperativeHandle } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import StyleSelector from './styleSelector.jsx';



function ImageGallery(props) {

  var [fullscreen, setFullscreen] = useState(false);

  var cycleImage = function (e, str) { // str is a type of cycleImage thats either back arrow or next arrow
    e.preventDefault();

    if (str === 'next') {
      props.imageIdx === images[props.styleIdx].length - 1 ? props.setImageIdx(0) : props.setImageIdx(props.imageIdx + 1);
    } else if (str === 'back') {
      props.imageIdx === 0 ? props.setImageIdx(images[props.styleIdx].length - 1) : props.setImageIdx(props.imageIdx - 1);
    }
  }

  var clickedFullScreen = function (e, str) { // changes between true and false depending if fullscreen it's true or false // changes CSS
    e.preventDefault();
    fullscreen === false ? setFullscreen(true) : setFullscreen(false);

    if (fullscreen) {

      imageFullscreen = {
        width: '100%',
        height: 560,
        objectFit: 'cover',
        textAlign: 'center',
        padding: '10px',
      };
      document.getElementById('AverageReview').style.display = 'none';
      document.getElementById('ProductInfo').style.display = 'none';
      document.getElementById('Share').style.display = 'none';
      document.getElementById('StyleSelector').style.display = 'none';
      document.getElementById('AddToCart').style.display = 'none';

    } else {

      imageFullscreen = {
        width: 715,
        height: 560,
        objectFit: 'none',
        textAlign: 'center',
        padding: '10px',
      };
      document.getElementById('AverageReview').style.display = 'inline';
      document.getElementById('ProductInfo').style.display = 'inline';
      document.getElementById('Share').style.display = 'inline';
      document.getElementById('StyleSelector').style.display = 'inline';
      document.getElementById('AddToCart').style.display = 'inline';
    }
  }


  return (
    <section id='ImageGallery' style={{ width: 'fit-content', float: 'left', display: 'inline', position: 'relative'}}>

      <img id='image' style={imageFullscreen} alt="current image" src={images[props.styleIdx][props.imageIdx]} />

      <section style={ImageGalleryButtonsFullscreen} id='ImageGalleryButtons'>
        <button style={arrowButton} onClick={(e) => { cycleImage(e, 'back'); }}><span>&#8592;</span></button>
        <button style={arrowButton} onClick={(e) => { cycleImage(e, 'next'); }}><span>&#8594;</span></button>
        <button style={fullscreenButton} onClick={(e) => { clickedFullScreen(e); }}><span>&#9744;</span></button>
      </section>

      <section style={StyleListScrollFullscreen} id='StyleListScroll'>
        <span style={arrowButton}>&#8593;</span>
        <StyleListScroll >{props.product.style.map((st, idx) =>
          <StyleListButton id={`S${idx + 1}`} data-idx={idx} backgroundImage={st.photos[0].thumbnail_url} onClick={(e) => { props.chosenStyle(e); }}>S{idx + 1}</StyleListButton>)}
        </StyleListScroll>
        <span style={arrowButton}>&#8595;</span>
      </section>

    </section>
  )
};

export default ImageGallery;



var imageFullscreen = { // initial #image css but then changes depending if clickedFullScreen ever got invoked
  width: 715,
  height: 560,
  objectFit: 'none',
  textAlign: 'center',
  padding: '10px',
};

var ImageGalleryButtonsFullscreen = {
  width: 'fit-content',
  width: 'fit-content',
  position: 'absolute',
  top: '15px',
  right: '20px',
  // left: '20px',
};

var StyleListScrollFullscreen = {
  width: 'fit-content',
  position: 'absolute',
  top: '15px',
  // right: '0px',
  left: '20px',
};

var StyleListScroll = styled.div`
  margin:4px, 4px;
  padding:4px;
  width: fit-content;
  height: 236px;
  overflow-x: hidden;
  overflow-y: auto;
`;

var StyleListButton = styled.div`
  color: white;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  border: solid black;
  padding: 10px;
  margin-bottom: 20px;
  width: 35;
  height: 35;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

var fullscreenButton = {
  display: 'inline-block',
  textAlign: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: 'solid black',
  padding: '5px',
  width: 35,
  height: 35
};

var arrowButton = {
  display: 'inline-block',
  textAlign: 'center',
  // borderRadius: '10px',
  backgroundColor: 'transparent',
  // backgroundPosition: 'left top',
  border: 'none',
  padding: '5px',
  width: 45,
  height: 45,
  fontSize: '25px'
};

// used to be ./public/desg1.jpg before router, ./ meant inside of /dist
var images = [ // images sample, but incase of the actual product this would be styles of the product, needs to be dynamic
  ['./../public/desg1.jpg', './../public/desg2.jpg', './../public/desg3.jpg'],
  ['./../public/flower1.jpg', './../public/flower2.jpg', './../public/flower3.jpg'],
  ['./../public/food1.jpg', './../public/food2.jpg', './../public/food3.jpg'],
  ['./../public/sport1.jpg', './../public/sport2.jpg', './../public/sport3.jpg']

