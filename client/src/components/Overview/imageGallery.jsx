/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
image browser
the new stuff here like carosel

*/

import React from "react";
import { render } from "react-dom";



function ImageGallery() {
  return (
    <div id='ImageGallery' style={{ 'backgroundColor': ' Gainsboro' }}>
      <img alt="current imaga" />
      <button><span>&#8592;</span></button>
      <button><span>&#8594;</span></button>
      <button><span>&#9744;</span></button>
      <div>
        <button> <span>&#8593;</span></button>
        <div>s1</div>
        <div>s2</div>
        <div>s3</div>
        <div>s4</div>
        <div>s5</div>
        <div>s6</div>
        <div>s7</div>
        <div>s8</div>
        <button><span>&#8595;</span></button>
      </div>
    </div>
  )
};

export default ImageGallery;