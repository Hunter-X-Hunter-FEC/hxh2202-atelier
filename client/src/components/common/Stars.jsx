import React, { useState } from 'react';
import styled from 'styled-components'
// import averageRating from './oneMeta.js';

const StyledStars = styled.div`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StyledButton = styled.button`
  color: ${ ({isOn}) => isOn ? '#000' : '#ccc' };
  background-color: transparent;
  border: none;
  outline: none;
`

// component for interactive stars.
const Stars = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [hover, setHover] = useState(0);

  return (
    <StyledStars>
      {[...Array(5)].map((star, index) => {
        index += 1;
        const handlers = props.isReadOnly ?
          {} :
          {
            onClick: () => {
              setRating(index)
              props?.onClick(index)
            },
            onMouseEnter: () => setHover(index),
            onMouseLeave: () => setHover(rating),
          };

        return (
          <StyledButton
            type="button"
            key={index}
            isOn={index <= rating}
            { ...handlers }
          >
            <span className="star">&#9733;</span>
          </StyledButton>
        );
      })}
    </StyledStars>
  );
};

export default Stars