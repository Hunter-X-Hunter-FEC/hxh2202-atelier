import React from 'react';
import {IoIosStarOutline} from 'react-icons/io';
import styled from 'styled-components';

const Star = (props)=>{
  return (
    <div>
      {Array(5).fill(<IoIosStarOutline />)}
    </div>
  )
};

export default Star;