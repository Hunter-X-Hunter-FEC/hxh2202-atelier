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

  var [selectedId, setSelectedId] = useState(Object.keys(props.stock.skus)[0]);
  var [selectedSize, setSelectedSize] = useState('');
  var [selectedQuantity, setSelectedQuantity] = useState('');


 

  var choseSize = function (e) {

    setSelectedId(e.target.childNodes[e.target.selectedIndex].id);
    setSelectedSize(e.target.value);
  }

  var choseQuantity = function (e) {
    setSelectedQuantity(e.target.value);
  }

  var clickedAddToBag = function (e) {
    e.preventDefault();
  }

  var clickedAddToFavorites = function (e) {
    e.preventDefault();

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
  width: 350,
  // borderRadius: '10px',
  // backgroundColor: 'white',
  float: 'left',
  display: 'inline',
  // border: 'solid black',
  padding: '15px',
  marginLeft: '90px',
};

var AddToBag = styled.button`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  margin: 15px;
  padding: 15px;
  width: fit-content;
  font-size: 13px;
`;

var AddToFavorite = styled.button`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  margin: 15px;
  padding: 15px;
  width: fit-content;
  font-size: 18px;
`;

var SelectSize = styled.select`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  margin: 15px;
  padding: 15px;
  width: fit-content;
  font-size: 13px;
`;

var SelectQuantity = styled.select`
  border-radius: 10px;
  background-color: white;
  border: solid black;
  margin: 15px;
  padding: 15px;
  width: fit-content;
  font-size: 13px;
`;