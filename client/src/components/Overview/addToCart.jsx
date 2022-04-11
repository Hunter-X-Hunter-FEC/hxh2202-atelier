/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
add to cart
has a drop down table for size and quantity
add to cart button saves whatever current product is, the selected size and quantity, and adds it to user cart
should save the cart info between sessions
the favorite button saves the product like to add to cart but instead add to favorites
*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function AddToCart(props) {

  return (
    <section id='AddToCart' style={AddToCartStyle}>

      <SelectSize>
        <option value="" disabled selected>Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="M?/L">M/L</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </SelectSize>
      <SelectQuantity>
        <option value="" disabled selected>-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </SelectQuantity>
      <AddToBag>ADD TO BAG</AddToBag>
      <AddToFavorite><span>&#9734;</span></AddToFavorite>

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
// <option value="" disabled selected>OUT OF STOCK</option>