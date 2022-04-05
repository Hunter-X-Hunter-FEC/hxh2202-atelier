import React from 'react';
import PropTypes from 'prop-types';

const DistributionItem = ({value, max}) => {
  return (
    <progress value={value} max={max}/>
  )
}

DistributionItem.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number
}

DistributionItem.defaultProps = {
  max: 100,

}

export default DistributionItem;