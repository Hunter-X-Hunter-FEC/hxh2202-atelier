import React from 'react';
import Star from './Star.jsx';
import {AiOutlineArrowRight} from 'react-icons/ai';
import styled from 'styled-components';
import Logo from '../../assets/Logo.png';


const ProductContainer = styled.div`
heights: 100vh;
weights: auto;
flex: 1;
border: solid black;
font-family:sans-serif;
`

const ProductImage = styled.img`
width:95%;
boder-radius: 12px;
height: 80%;
object-fit: fill;
`
const ProductCategory = styled.div`
margin-top:5px;
height:24px;
margin-bottom:6px;
`
const ProductName = styled.h4`
margin-top:5px;
height:24px;
margin-bottom:6px;
`
const ProductPrice = styled.p`
margin-top:5px;
margin-bottom:10px;
`
const ProductRating = styled.div`
margin-bottom: 2px;
padding-top:5px;
`


function CataProduct ({selector, card}) {

	return (
		<ProductContainer onClick = {()=>selector(card)}>
			<ProductImage src={card.style[0] ? card.style[0].photos[0].url : Logo}/>
			<ProductCategory>
				{card.category}
			</ProductCategory>
			<ProductName>
				{card.name}
			</ProductName>
			<ProductPrice>
				<span>${card.style[0] ? card.style[0].original_price : '9999'}</span>
			</ProductPrice>
			<div className="rating">
				<Star />
			</div>
		</ProductContainer>
  )

};

export default CataProduct;