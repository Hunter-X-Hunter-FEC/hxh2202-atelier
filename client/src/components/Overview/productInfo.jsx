/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
product info
just info that it's category, full name and price
how to do populate this from the data incoming? Because it's only one thing rather than the multiple things? pass down selected data from overview as props
first thing from data, but change if something selected?

*/

import React from "react";
import { render } from "react-dom";



function ProductInfo() {

  return (
    <div id='ProductInfo' style={{ 'backgroundColor': 'DarkSalmon' }}>
      <div>Product Category</div>
      <div>Product Title</div>
      <div>Price</div>
    </div>
  )
};

export default ProductInfo;