/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
share to social media
just three buttons that opens a link to either Facebook, Twitter and Pinterest

*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function Share() {

  var clickedLink = function (e) {
    e.preventDefault();
    window.open(e.target.dataset.value, '_blank');
  }

  return (
    <section id='Share' style={ShareStyle}>
      <FacebookLink data-value='https://www.facebook.com/' onClick={(e) => { clickedLink(e); }}>Facebook</FacebookLink>
      <TwitterLink data-value='https://twitter.com/' onClick={(e) => { clickedLink(e); }}>Twitter</TwitterLink>
      <PinterestLink data-value='https://www.pinterest.com/' onClick={(e) => { clickedLink(e); }}>Pinterest</PinterestLink>
    </section>
  )
};

export default Share;



var ShareStyle = {
  // display: 'flex',
  width: 400,
  float: 'left',
  display: 'inline',
  textAlign: 'center',
  // borderRadius: '10px',
  // backgroundColor: 'white',
  // border: 'solid black',
  // padding: '10px',
  marginLeft: '90px',
};

var FacebookLink = styled.span`
  display: in-line-block;
  width: 85;
  padding: 10px;
  margin: 10px;
  &:hover {
    color: Blue;
    font-weight: bold;
}
`;

var TwitterLink = styled.span`
  display: in-line-block;
  width: 62;
  padding: 10px;
  margin: 10px;
  &:hover {
    color: Blue;
    font-weight: bold;
}
`;

var PinterestLink = styled.span`
  display: in-line-block;
  width: 73;
  padding: 10px;
  margin: 10px;
  &:hover {
    color: Blue;
    font-weight: bold;
}
`;