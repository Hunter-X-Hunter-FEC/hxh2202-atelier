import React, { useState, useEffect} from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import HeaderRating from './HeaderRating.jsx';
import styled from 'styled-components';
import Distribution from './Distribution.jsx';
const request = require('../Request.js');

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
  const [meta, setRatings] = useState();

  useEffect(() => {
    const fetchMetaData = async() => {

      const meta = await request.getMetaReviews(props.product.id);
      const metasRatings = meta.data.ratings;
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
        <HeaderRating distribution={meta}/>
      </StyledHeaderRating>
      <StyledDistrubution>
        <Distribution distribution={meta}/>
      </StyledDistrubution>
      <StyledProductBreakdown>
        <ProductBreakdown breakdown={meta}/>
      </StyledProductBreakdown>
    </>
  )
}

export default Ratings;