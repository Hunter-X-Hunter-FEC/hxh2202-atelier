import React from 'react';
import Star from './Star.jsx';
import {AiOutlineArrowRight} from 'react-icons/ai';
// import styled from 'styled-components';
import {ProductContainer, Card, ProductImage, ProductCategory,ProductName, ProductPrice} from './styles/productCard.styled.js';
import Logo from '../../../dist/public/icons/Logo.png';
const ProductCard = ({width, card})=>{
	// console.log('props.card', card)


  return (
		<ProductContainer>
			<Card>
				<ProductImage src={card.style[0].photos[0].url || Logo}/>
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


			</Card>
		</ProductContainer>

  )
};
export default ProductCard;