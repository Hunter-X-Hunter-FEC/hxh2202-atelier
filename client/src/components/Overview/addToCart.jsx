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

import React from "react";
import { render } from "react-dom";



function AddToCart() {

  return (
    <div id='AddToCart' style={{ 'backgroundColor': 'DodgerBlue' }}>
      <select>
        <option value="" disabled selected>Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="M?/L">M/L</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <select>
        <option value="" disabled selected>-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>ADD TO BAG</button>
      <button><span>&#9734;</span></button>

    </div>
  )
};

export default AddToCart;

// <option value="" disabled selected>OUT OF STOCK</option>