import React from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import HeaderRating from './HeaderRating.jsx';
import Distribution from './Distribution.jsx';

const Ratings = (props) => {
  return (
    <>
      <HeaderRating />
      <Distribution />
      <ProductBreakdown />
    </>
  )
}

export default Ratings;