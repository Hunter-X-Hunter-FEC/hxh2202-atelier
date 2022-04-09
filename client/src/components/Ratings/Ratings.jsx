import React, { useState, useEffect} from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import HeaderRating from './HeaderRating.jsx';
import styled from 'styled-components';
import Distribution from './Distribution.jsx';
const request = require('../Request.js');
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
  const [meta, setRatings] = useState({});

  useEffect(() => {
    const fetchMetaData = async() => {
      console.log('inside of Ratings.jsx, props.product.id: ', props.product.id)
      const meta = await request.getMetaReviews(props.product.id);
      const metasRatings = await Promise.all([meta.data.ratings]);
      console.log('meta: ', meta);
      console.log('metasRatings: ', metasRatings);
      setRatings(metasRatings);
    }

    fetchMetaData();


  }, [])


  useEffect(()=>{
    localStorage.setItem('ratings', JSON.stringify(meta))
  }, [meta])


  return (
    <>
      <StyledHeaderRating>
        <HeaderRating distribution={meta[0]}/>
      </StyledHeaderRating>
      <StyledDistrubution>
        <Distribution distribution={meta[0]}/>
      </StyledDistrubution>
      <StyledProductBreakdown>
        <ProductBreakdown />
      </StyledProductBreakdown>
    </>
  )
}

export default Ratings;