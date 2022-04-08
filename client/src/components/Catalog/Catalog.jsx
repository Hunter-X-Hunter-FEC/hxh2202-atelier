import React from 'react';
import Star from './Star.jsx';
import {AiOutlineArrowRight} from 'react-icons/ai';
import CataProduct from './CataProduct.jsx';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

`

const Catalog = ({selector, allProducts})=>{
	// console.log('allProducts in catalog', allProducts);

  return (
		<Container>
			{allProducts && allProducts.map((card, index)=><CataProduct key={index} selector={selector} card={card} />)}
		</Container>

  )
};
export default Catalog;
