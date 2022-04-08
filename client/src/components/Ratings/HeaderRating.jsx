import React from 'react'
import styled from 'styled-components';
import Stars from './Stars.jsx';
// import { averageRating, ones } from './oneMeta.js';

const HeaderRating = (props) => {
  return (
    <>
      <div className="HeaderRating"> Header Rating Component Here </div>
      <div>Overall Rating: 4</div>
      <Stars rating={4} isReadOnly onClick={(rating) => console.log('The rating', rating)}/>
    </>
  )
}

export default HeaderRating;