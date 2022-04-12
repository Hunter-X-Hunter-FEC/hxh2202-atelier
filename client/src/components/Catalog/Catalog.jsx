import React from 'react';
import Star from './Star.jsx';
import {AiOutlineArrowRight} from 'react-icons/ai';
import CataProduct from './CataProduct.jsx';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 420px);
gtif-template-rows: repeat(4, 560px);
gap:10px;
`

const Catalog = ({selector, allProducts})=>{
	console.log('allProducts in catalog', allProducts);

  return (
		<Container>
			{allProducts && allProducts.map((card, index)=><CataProduct key={index} selector={selector} card={card} />)}
		</Container>

  )
};
export default Catalog;
