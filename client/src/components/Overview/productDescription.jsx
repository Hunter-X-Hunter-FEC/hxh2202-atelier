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
  width: 'auto',
  display: 'flex',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: 'solid black',
  padding: '10px',
};

var FtList = styled.li`
list-style-type: "√ ";
`;

var Slogan = styled.p`
`;

var Description = styled.p`
`;


// <button style={arrowButton}><span>&#8593;</span></button>{[...Array(images.length).keys()].map((num) =>
//   <div style={notSelectedStyleList} id={`S${num + 1}`} data-value={num} onClick={(e) => { chosenStyle(e); }}>S{num + 1}</div>)}
// <button style={arrowButton}><span>&#8595;</span></button>

// {
//   "id": 65632,
//   "campus": "rfp",
//   "name": "Bright Future Sunglasses",
//   "slogan": "You've got to wear shades",
//   "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
//   "category": "Accessories",
//   "default_price": "69.00",
//   "created_at": "2022-03-29T15:08:08.445Z",
//   "updated_at": "2022-03-29T15:08:08.445Z",
//   "features": [
//       {
//           "feature": "Lenses",
//           "value": "Ultrasheen"
//       },
//       {
//           "feature": "UV Protection",
//           "value": null
//       },
//       {
//           "feature": "Frames",
//           "value": "LightCompose"
//       }
//   ]
// }