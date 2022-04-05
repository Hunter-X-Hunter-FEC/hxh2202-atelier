import React from 'react';
import Star from './Star.jsx';
import {AiOutlineArrowRight} from 'react-icons/ai';
// import styled from 'styled-components';
import {ProductContainer, ProductImage, ProductCategory,ProductName, ProductPrice} from './styles/productCard.styled.js';

const ProductCard = ({key, card})=>{
	// console.log('props.card', card)


  return (

		<ProductContainer>
			<ProductImage src={card.style[0].photos[0].url}/>
			<ProductCategory>
				{card.category}
			</ProductCategory>
			<ProductName>
				{card.name}
			</ProductName>
			<ProductPrice>
				<span>${card.style[0].original_price}</span>
			</ProductPrice>
			<div className="rating">
					<Star />
			</div>
		</ProductContainer>

  )
};
export default ProductCard;