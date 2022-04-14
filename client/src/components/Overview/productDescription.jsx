/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
Product Description
just contains the full product description plus a list of facts
*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function ProductDescription(props) {

  return (
    <section id='ProductDescription' style={ProductDescriptionStyle}>
      <p>{props.product.slogan}</p>
      <p>{props.product.description}</p>
      <ul>{props.product.features.map((ft) =>
        <FtList ><span>{ft.feature}</span>{(ft.value !== null) && <span> {ft.value}</span>}</FtList>)}
      </ul>
    </section>
  )
};

export default ProductDescription;



var ProductDescriptionStyle = {
  width: '1440px',
  // display: 'flex',
  // borderRadius: '10px',
  // backgroundColor: 'white',
  // border: 'solid black',
  padding: '10px',
  position: 'absolute',
  top: 700,
};

var FtList = styled.li`
list-style-type: "√ ";
`;

var Slogan = styled.p`
font-size: 18px;
`;

var Description = styled.p`
`;