import React from 'react'
import styled from 'styled-components';

const HeaderRating = (props) => {
  return (
    <>
      <div className="HeaderRating"> Header Rating Component Here </div>
      <div>Overall Rating: {props.data.results[0].rating}</div>
    </>
  )
}

export default HeaderRating;