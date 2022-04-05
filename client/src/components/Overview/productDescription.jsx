/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
Product Description
just contains the full product description plus a list of facts
*/

import React from "react";
import { render } from "react-dom";



function ProductDescription() {

  return (
    <div id='ProductDescription' style={{ 'backgroundColor': 'LightSlateGrey' }}>
      <div>large product descption with slogas</div>
      <div>
        <ul>
          <li>some fact1</li>
          <li>some fact2</li>
          <li>some fact3</li>
        </ul>
      </div>
    </div>
  )
};

export default ProductDescription;