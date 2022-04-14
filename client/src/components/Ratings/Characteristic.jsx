import React from 'react';

const Characteristic = ({characteristic, charsRated}) => {
  const presentingValue = Math.round(charsRated * 100) / 100
  return (
    <div>
      <span>{characteristic}</span>
      <progress value={charsRated} max={5}/>
      <span>(Rated by others as: {presentingValue})</span>
    </div>
  )
}

export default Characteristic;