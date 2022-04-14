/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
product info
just info that it's category, full name and price
how to do populate this from the data incoming? Because it's only one thing rather than the multiple things? pass down selected data from overview as props
first thing from data, but change if something selected?

*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function ProductInfo(props) {

  return (
    <section id='ProductInfo' style={ProductInfoStyle}>
      <Category>{props.product.category}</Category>
      <Name>{props.product.name}</Name>
      <Price>${props.product.default_price}</Price>
    </section>
  )
};

export default ProductInfo;



var Category = styled.div`
text-transform: uppercase;
padding: 3px;
`;

var Name = styled.div`
font-size: 28px;
padding: 3px;
`;

var Price = styled.div`
text-transform: uppercase;
font-size: 16px;
padding: 9px;
`;

var ProductInfoStyle = {
  width: 400,
  // borderRadius: '10px',
  float: 'left',
  display: 'inline',
  position: 'relative',
  // backgroundColor: 'white',
  // border: 'solid black',
  padding: '10px',
  marginLeft: '90px',
};