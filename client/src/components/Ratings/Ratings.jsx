import React, { useState, useEffect} from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import HeaderRating from './HeaderRating.jsx';
import styled from 'styled-components';
import Distribution from './Distribution.jsx';
const request = require('../Request.js');

const StyledHeaderRating = styled.div`
  // padding: 0.5em;
  // margin: 0.5em;
  // color: palevioletred;
  // background: papayawhip;
  // border: 1px solid black;
  // border-radius: 5px;
`;

const StyledDistrubution = styled.div`
  // padding: 0.5em;
  // margin: 0.5em;
  // color: orange;
  // background: papayawhip;
  // border: 1px solid black;
  // border-radius: 5px;
`;

const StyledProductBreakdown = styled.div`
  // padding: 0.5em;
  // margin: 0.5em;
  // color: LightBlue;
  // background: papayawhip;
  // border: 1px solid black;
  // border-radius: 5px;
`;



const Ratings = (props) => {
  const [meta, setRatings] = useState();
  const [metaChar, setMetaChar] = useState()

  useEffect(() => {
    const fetchMetaData = async() => {
      console.log('inside of Ratings.jsx, props.product.id: ', props.product.id)
      const meta = await request.getMetaReviews(props.product.id);
      const metasRatings = meta.data.ratings;
      const metaChars = meta.data.characteristics;
      console.log('metaChars: ', meta.data.characteristics)
      console.log('meta: ', meta);
      console.log('metasRatings: ', metasRatings);
      setMetaChar(metaChars)
      setRatings(metasRatings);
    }

    fetchMetaData();

  }, [])


  useEffect(()=>{
    localStorage.setItem('ratings', JSON.stringify(meta))
  }, [meta])

  useEffect(()=>{
    localStorage.setItem('characteristics', JSON.stringify(metaChar))
  }, [metaChar])


  return (
    <>
      <StyledHeaderRating>
        <HeaderRating distribution={meta}/>
      </StyledHeaderRating>
      <StyledDistrubution>
        <Distribution distribution={meta}/>
      </StyledDistrubution>
      <StyledProductBreakdown>
        <ProductBreakdown metaChar={metaChar}/>
      </StyledProductBreakdown>
    </>
  )
}

export default Ratings;