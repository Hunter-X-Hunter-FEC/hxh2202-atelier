import React from 'react'
import styled from 'styled-components';
import Stars from '../common/Stars.jsx';
import { averageRating, ones } from '../common/oneMeta.js';

const HeaderRating = (props) => {
  return (
    <>
      <div className="HeaderRating"> Header Rating Component Here </div>
      <div>Overall Rating: 4</div>
      <Stars rating={props.averageRating} isReadOnly onClick={(rating) => console.log('The rating', rating)}/>
    </>
  )
}

export default HeaderRating;