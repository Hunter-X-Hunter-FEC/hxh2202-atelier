import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledDistrubutionItem = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  color: orange;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 5px;
`;

const DistributionItem = ({stars, value, max}) => {
  return (
    <StyledDistrubutionItem>
      <span>{stars} star-rating </span>
      <progress value={value} max={max}/>
      <span>({(value)})</span>
    </StyledDistrubutionItem>
  )
}

// DistributionItem.propTypes = {
//   value: PropTypes.number.isRequired,
//   max: PropTypes.number
// }

// DistributionItem.defaultProps = {
//   max: 100,

// }

export default DistributionItem;