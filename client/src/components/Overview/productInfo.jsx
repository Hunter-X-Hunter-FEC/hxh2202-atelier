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
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>${props.product.default_price}</div>
    </section>
  )
};

export default ProductInfo;



// var Button = styled.button`
// display: flex;
// text-align: center;
// background-color: transparent;
// border: transparent;
// &:hover {
//   color: blue;
//   font-weight: bold;
// }
// `;


var ProductInfoStyle = {
  width: 400,
  borderRadius: '10px',
  float: 'left',
  display: 'inline',
  position: 'relative',
  backgroundColor: 'white',
  border: 'solid black',
  padding: '10px',
  marginLeft: '110px',
};

// var [myProps, setMyProps] = useState({});
  // var [category, setCategory] = useState('n/a');
  // var [name, setName] = useState('n/a');
  // var [price, setPrice] = useState(0.00);

  // useEffect(() => {
  //   setMyProps(props.product);
  //   setCategory(myProps.product.category);
  //   setName(myProps.product.name);
  //   setPrice(myProps.product.default_price);
  // }, []);