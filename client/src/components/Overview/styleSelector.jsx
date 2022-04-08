/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
style selector
a containiter with multiple styles to choose from, same as from style list, each changes the product style/color
upon selected style it will have a checkmark to indicate it's the currently selected
*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function StyleSelector() {

  return (
    <section id='StyleSelector' style={{ 'backgroundColor': 'DarkOrange' }}>
      <div>s1</div>
      <div>s2</div>
      <div>s3</div>
      <div>s4</div>
      <div>s5</div>
      <div>s6</div>
      <div>s7</div>
      <div>s8</div>
    </section>
  )
};

export default StyleSelector;