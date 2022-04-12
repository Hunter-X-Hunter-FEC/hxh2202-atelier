/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
add to cart
has a drop down table for size and quantity
add to cart button saves whatever current product is, the selected size and quantity, and adds it to user cart
should save the cart info between sessions
the favorite button saves the product like to add to cart but instead add to favorites

eact Option has a onClick that invokes the setState
*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function AddToCart(props) {

  // console.log(Object.keys(props.product.style[props.stockIdx].skus));
  // console.log(props.stock.skus[Object.keys(props.stock.skus)[0]]);

  var [selectedId, setSelectedId] = useState(Object.keys(props.stock.skus)[0]);
  var [selectedSize, setSelectedSize] = useState('');
  var [selectedQuantity, setSelectedQuantity] = useState('');

  // console.log(props.stock.skus);
  // console.log(selectedId);
  // console.log(selectedSize);
  // console.log(selectedQuantity);

  // useEffect(() => {
  //   setSelectedId()
  // }, [])

  var choseSize = function (e) {
    // console.log(e.target.value);
    // console.log(e.target.childNodes[e.target.selectedIndex].id);
    setSelectedId(e.target.childNodes[e.target.selectedIndex].id);
    setSelectedSize(e.target.value);
  }

  var choseQuantity = function (e) {
    setSelectedQuantity(e.target.value);
  }

  var clickedAddToBag = function (e) {
    e.preventDefault();
    console.log('save selected dropdowns to localstorage'); // read selectedSize and selectedQuantity
  }

  var clickedAddToFavorites = function (e) {
    e.preventDefault();
    console.log('save selected dropdowns to localstorage that deals with favorites, Related component'); // read selectedSize and selectedQuantity
  }


  return (
    <section id='AddToCart' style={AddToCartStyle}>

      <SelectSize onChange={(e) => { choseSize(e); }}>
        <option value="" disabled selected>Select Size</option>{Object.keys(props.stock.skus).map((key) =>
        <option value={props.stock.skus[key].size} id={key}>{props.stock.skus[key].size}</option>)}
      </SelectSize>


      <SelectQuantity onChange={(e) => { choseQuantity(e); }}>
        <option value="" disabled selected>-</option>
        {/* {[...Array(props.stock.skus[selectedId].quantity).keys()].map((idx) =>
        <option value={idx} id={idx} >{idx}</option>)} */}
      </SelectQuantity>


      <AddToBag onClick={(e) => { clickedAddToBag(e); }}>ADD TO BAG</AddToBag>
      <AddToFavorite onClick={(e) => { clickedAddToFavorites(e); }}><span>&#9734;</span></AddToFavorite>

    </section>
  )
};

export default AddToCart;



var AddToCartStyle = {
  width: 400,
  borderRadius: '10px',
  backgroundColor: 'white',
  border: 'solid black',
  padding: '10px',
};

var AddToBag = styled.button`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  padding: 5px;
  width: fit-content;
`;

var AddToFavorite = styled.button`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  padding: 5px;
  width: fit-content;
`;

var SelectSize = styled.select`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  padding: 5px;
  width: fit-content;
`;

var SelectQuantity = styled.select`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  padding: 5px;
  width: fit-content;
`;

//  useEffect(() => {
  //   for (var n = 0; n <= images.length; n++) {
  //     if (document.getElementById(`S${n}`)) {
  //       document.getElementById(`S${n}`).style.border = "transparent";
  //     }
  //   }
  // }, [styleIdx])

// onClick={(e) => { chosenStyleCont(e); }}

// <StyleListScroll >{props.product.style.map((st, idx) =>
//           <StyleListButton id={`S${idx + 1}`} data-value={idx} onClick={(e) => { props.chosenStyle(e); }}>S{idx + 1}</StyleListButton>)}
//         </StyleListScroll>

// <option value="" disabled selected>OUT OF STOCK</option>

// {
//   "2352328": {
//       "quantity": 8,
//       "size": "XS"
//   },
//   "2352329": {
//       "quantity": 16,
//       "size": "S"
//   },
//   "2352330": {
//       "quantity": 17,
//       "size": "M"
//   },
//   "2352331": {
//       "quantity": 10,
//       "size": "L"
//   },
//   "2352332": {
//       "quantity": 15,
//       "size": "XL"
//   },
//   "2352333": {
//       "quantity": 6,
//       "size": "XXL"
//   }
// }