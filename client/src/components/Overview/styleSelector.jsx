/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
style selector
a containiter with multiple styles to choose from, same as from style list, each changes the product style/color
upon selected style it will have a checkmark to indicate it's the currently selected
*/

import React, { useState, useReducer, useEffect, useCallback } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function StyleSelector(props) {

  var chosenStyleCont = function (e) {
    e.preventDefault();

    // for (var n = 0; n <= props.product.style.length; n++) {
    //   if (document.getElementById(`S${n}`)) {
    //     document.getElementById(`S${n}`).style.border = 'solid black';
    //   }
    // }

    // document.getElementById(e.target.id).style.borderBottom = '8px solid LightSkyBlue';

    props.chosenStyle(e);
  }

  return (
    <section id='StyleSelector' style={StyleSelectorStyle}>{props.product.style.map((st, idx) =>
      <StyleCont id={`S${idx + 1}`} data-idx={idx} backgroundImage={st.photos[0].thumbnail_url} onClick={(e) => { chosenStyleCont(e); }}>S{idx + 1}</StyleCont>)}
    </section>
  )
};

export default StyleSelector;



var StyleSelectorStyle = {
  width: 400,
  // borderRadius: '10px',
  float: 'left',
  display: 'inline',
  // backgroundColor: 'white',
  // border: 'solid black',
  padding: '15px',
  marginLeft: '90px',
};

var StyleCont = styled.div`
  color: white;
  display: inline-block;
  text-align: center;
  border-radius: 45%;
  background-color: white;
  border: solid black;
  padding: 7px;
  margin: 7px;
  width: 55px;
  height: 55px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

var images = [
  ['./public/desg1.jpg', './public/desg2.jpg', './public/desg3.jpg'],
  ['./public/flower1.jpg', './public/flower2.jpg', './public/flower3.jpg'],
  ['./public/food1.jpg', './public/food2.jpg', './public/food3.jpg'],
  ['./public/sport1.jpg', './public/sport2.jpg', './public/sport3.jpg']
];
