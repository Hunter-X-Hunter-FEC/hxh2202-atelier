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

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function ImageGallery(props) {

  var [styleIdx, setStyleIdx] = useState(0);
  var [imageIdx, setImageIdx] = useState(0);
  var [fullscreen, setFullscreen] = useState(false);

  var chosenStyle = function (e) {
    e.preventDefault();
    console.log('clicked a style list');

    if (images[e.target.dataset.value] === undefined) {
      setImageIdx(0);
      setStyleIdx(0);
    } else if (styleIdx === parseInt(e.target.dataset.value)) {
      return 0;
    } else {
      setImageIdx(0);
      setStyleIdx(parseInt(e.target.dataset.value));
    }
  }

  var cycleImage = function (e, str) { // str is a type of cycleImage thats either back arrow or next arrow
    e.preventDefault();

    if (str === 'next') {
      imageIdx === images[styleIdx].length - 1 ? setImageIdx(0) : setImageIdx(imageIdx + 1);
    } else if (str === 'back') {
      imageIdx === 0 ? setImageIdx(images[styleIdx].length - 1) : setImageIdx(imageIdx - 1);
    }
  }

  var clickedFullScreen = function (e, str) { // changes between true and false depending if fullscreen it's true or false // changes CSS
    e.preventDefault();
    fullscreen === false ? setFullscreen(true) : setFullscreen(false);

    if (fullscreen) {
      imageFullscreen = {
        width: '100%',
        height: 560,
        objectFit: 'center',
        textAlign: 'center',
        padding: '10px',
      };
    } else {
      imageFullscreen = {
        width: 715,
        height: 560,
        objectFit: 'none',
        textAlign: 'center',
        padding: '10px',
      };
    }
  }

  return (
    <section id='ImageGallery' style={{ width: 'fit-content' }}>

      <img id='image' style={imageFullscreen} alt="current image" src={images[styleIdx][imageIdx]} />

      <section style={{ width: 'fit-content' }} id='ImageGalleryButtions'>
        <button style={arrowButton} onClick={(e) => { cycleImage(e, 'back'); }}><span>&#8592;</span></button>
        <button style={arrowButton} onClick={(e) => { cycleImage(e, 'next'); }}><span>&#8594;</span></button>
        <button style={fullscreenButton} onClick={(e) => { clickedFullScreen(e); }}><span>&#9744;</span></button>
      </section>

      <section style = {{ width: 'fit-content' }} id='StyleListScroll'>
        <span style={arrowButton}>&#8593;</span>
        <StyleListScroll >{props.product.style.map((st, idx) =>
          <StyleListButton id={`S${idx + 1}`} data-value={idx} onClick={(e) => { chosenStyle(e); }}>S{idx + 1}</StyleListButton>)}
        </StyleListScroll>
        <span style={arrowButton}>&#8595;</span>
      </section>

    </section>
  )
};

export default ImageGallery;


// var Gallery = styled.img`
// display: flex;
// text-align: center;
// background-color: transparent;
// border: transparent;
// &:hover {
//   color: blue;
//   font-weight: bold;
// }
// `;


var imageFullscreen = { // initial #image css but then changes depending if clickedFullScreen ever got invoked
  width: 715,
  height: 560,
  objectFit: 'none',
  textAlign: 'center',
  padding: '10px',
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
  text-align: center;
  border-radius: 10px;
  background-color: white;
  border: solid black;
  padding: 5px;
  width: 35;
  height: 35
`;


// var notSelectedStyleList = { // initial #styleList css and gets reused with each re-render, but doesn't work????
//   display: 'inline-block',
//   textAlign: 'center',
//   borderRadius: '10px',
//   backgroundColor: 'white',
//   border: 'solid black',
//   padding: '5px',
//   width: 35,
//   height: 35
// };

// var selectedStyleList = {
//   display: 'inline-block',
//   textAlign: 'center',
//   borderRadius: '10px',
//   backgroundColor: 'white',
//   borderBottom: 'solid black',
//   padding: '5px',
//   margin: '5px',
//   width: 35,
//   height: 35
// };

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



var images = [ // images sample, but incase of the actual product this would be styles of the product, needs to be dynamic
  ['./public/desg1.jpg', './public/desg2.jpg', './public/desg3.jpg'],
  ['./public/flower1.jpg', './public/flower2.jpg', './public/flower3.jpg'],
  ['./public/food1.jpg', './public/food2.jpg', './public/food3.jpg'],
  ['./public/sport1.jpg', './public/sport2.jpg', './public/sport3.jpg']
];


  // useEffect(() => {
  //   for (var n = 0; n <= images.length; n++) {
  //     if (document.getElementById(`S${n}`)) {
  //       document.getElementById(`S${n}`).style.border = "transparent";
  //     }
  //   }
  // }, [styleIdx])


  // const forceUpdate = useReducer(() => ({}))[1]; // just a cheap way for force a rerender that isn't a state change but something else like CSS changes // also becuase sometime set doesn't re-render


// <div>
//   <button><span>&#8593;</span></button>{ [...Array(images.length).keys()].map((num) =>
//     <div id={`S${num+1}`} data-value={num} style={{ borderBottom: 'none' }} onClick={(e) => { chosenStyle(e); }}>S{num+1}</div>)}
//   <button><span>&#8595;</span></button>
// </div>

// for (var n = 0; n <= 5; n++) ((num) =>
// <div id={`S${idx+1}`} data-value={idx} style={{ borderBottom: 'none' }} onClick={(e) => { chosenStyle(e); }}>S{idx+1}</div>)(n)}

// <button><span>&#8593;</span></button>{ for (var n = 0; n <= images.length - 1; n++) ((num) =>
//           <div id={`S${num+1}`} data-value={num} style={{ borderBottom: 'none' }} onClick={(e) => { chosenStyle(e); }}>S{num+1}</div>)(n);}
//         <button><span>&#8595;</span></button>

// border-style: solid
// border-bottom: 5px solid red;

// console.log(e.target.dataset.value);


// onClick={(event) => { props.clickedWatch(event, props.movie.title); }}

// <a href="https://www.w3schools.com">
// <img src="w3html.gif" alt="W3Schools.com" width="100" height="132">
// </a>

// <button value='0' onClick={(e) => {chosenStyle(e.target.value); }}>S1</button>
//         <div value='1' onClick={(e) => {chosenStyle(); }}>S2</div>
//         <div value='2' onClick={(e) => {chosenStyle(e.value); }}>S3</div>
//         <div value='3' onClick={(e) => {chosenStyle(e.value); }}>S4</div>