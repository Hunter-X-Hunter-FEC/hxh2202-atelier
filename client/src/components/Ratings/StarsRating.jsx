import React, { useState } from 'react';
// import './Stars.styles.css';
import styled from 'styled-components'

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
const StarsRating = (props) => {
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
            // onRate()
          };

        return (
          <>
            <StyledButton
              className="Stars"
              type="button"
              key={index}
              isOn={index <= rating}
              { ...handlers }
            >
              <span className="star">&#9733;</span>
            </StyledButton>
          </>
        );
      })}
    </StyledStars>
  );
};

export default StarsRating;