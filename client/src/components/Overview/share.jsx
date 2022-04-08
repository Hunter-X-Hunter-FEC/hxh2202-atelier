/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
share to social media
just three buttons that opens a link to either Facebook, Twitter and Pinterest

*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";



function Share() {

  return (
    <section id='Share' style={{ 'backgroundColor': 'Aquamarine' }}>
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Pinterest</div>
    </section>
  )
};

export default Share;