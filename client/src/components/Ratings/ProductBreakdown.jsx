import React from 'react'
import Ratings from './Ratings.jsx';
import Characteristic from './Characteristic.jsx';


const ProductBreakdown = ({metaChar}) => {
  // console.log('props.metaChar: ', metaChar);
  const characteristics = metaChar || {};
  var characteristicArray = Object.keys(characteristics);
  return (
    <div>
    {
      Object.keys(characteristics).map((char, i) => {
        return <Characteristic key={`${char}-${i}`} characteristic={char} charsRated={characteristics[char].value} />
      })
    }
    </div>
  )
}

export default ProductBreakdown;