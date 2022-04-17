import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledDistrubutionItem = styled.div`
  width: 90%;
  display: inline-grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const BarContainer = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
`;

const Bar = styled.div`
  width: ${({value, max}) => {return (value / max) * 100}}%;
  height: 18px;
  background-color: rgba(50,115,220,0.3);
`;

const SideLeft = styled.div`
  float: left;
  margin-top: 10px;
  text-decoration: underline;
`;

const Middle = styled.div`
  float: left;
  margin-top: 10px;
`;

const SideRight = styled.div`
  margin-top: 10px;
  text-align: right;
`;

const DistributionItem = ({stars, value, max}) => {
  return (
    <StyledDistrubutionItem>
      <SideLeft>
        <span>{stars} star </span>
      </SideLeft>
      <Middle>
        <BarContainer>
          <Bar value={value} max={max}></Bar>
        </BarContainer>
      </Middle>
      <SideRight>
        <span>({(value)})</span>
      </SideRight>
    </StyledDistrubutionItem>
  )
}

export default DistributionItem;