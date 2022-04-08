import React from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import HeaderRating from './HeaderRating.jsx';
import styled from 'styled-components';
import Distribution from './Distribution.jsx';
// import a from '../common/oneReview.js';
// import averageRating from '../common/oneMeta.js'  // = module.exports = averageRating

const StyledHeaderRating = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledDistrubution = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  color: orange;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledProductBreakdown = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  color: LightBlue;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 5px;
`;


const Ratings = (props) => {
  return (
    <>
      <StyledHeaderRating>
        <HeaderRating averageRating={4}/>
      </StyledHeaderRating>
      <StyledDistrubution>
        <Distribution />
      </StyledDistrubution>
      <StyledProductBreakdown>
        <ProductBreakdown />
      </StyledProductBreakdown>
    </>
  )
}

export default Ratings;