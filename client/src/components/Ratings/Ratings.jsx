import React from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import HeaderRating from './HeaderRating.jsx';
import styled from 'styled-components';
import Distribution from './Distribution.jsx';

const StyledHeaderRating = styled.p`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledDistrubution = styled.p`
  padding: 0.5em;
  margin: 0.5em;
  color: orange;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledProductBreakdown = styled.p`
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
        <HeaderRating />
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