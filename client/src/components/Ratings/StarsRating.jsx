import React, { useState, Fragment } from 'react';
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
const StarsRating = ({ rating, isReadOnly, handleRatingChange }) => {
  const [hover, setHover] = useState(rating);

  const handleChange = (index) => {
    handleRatingChange(index);
    setHover(index)
  }

  return (
    <StyledStars>
      {[...Array(5)].map((star, index) => {
        index += 1;
        const handlers = isReadOnly ?
          {} :
          {
            onClick: () => {
              handleChange(index)
            },
            onMouseEnter: () => handleRatingChange(index),
            onMouseLeave: () => handleRatingChange(hover),
          };

        return (
          <Fragment key={`start-rating-${index}`} >
            <StyledButton
              className="Stars"
              type="button"
              isOn={index <= rating}
              { ...handlers }
            >
              <span className="star">&#9733;</span>
            </StyledButton>
          </Fragment>
        );
      })}
    </StyledStars>
  );
};

export default StarsRating;