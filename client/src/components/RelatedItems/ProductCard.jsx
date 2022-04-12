import React from 'react';
import {useState, useEffect} from 'react';
import Star from './Star.jsx';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
// import styled from 'styled-components';
import {ProductContainer, Card, ProductImage, CompareWrapper, ProductCategory,ProductName, ProductPrice} from './styles/productCard.styled.js';
import Logo from '../../assets/Logo.png';
import Comparison from './Comparison.jsx';


const ProductCard = ({curProduct, switchProduct, card})=>{
	// console.log('props.card', card)
	console.log('curProduct', curProduct)
	const [showModal, setShowModal] = useState(false);
	const [compare, setCompare] = useState({});


	useEffect(()=>{
		setCompare(compare)
	}, [compare])

	const compareClicker = (event)=>{
		event.stopPropagation();
		setShowModal(!showModal);
		setCompare(card);
	}

  return (
		<ProductContainer>
			<Card onClick={()=>switchProduct(card)}>
				<CompareWrapper onClick={compareClicker}>
						<BsSearch style={{top:'0px', color: "grey", right:'0px'}} size={30} />
				</CompareWrapper>
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
				{showModal && <Comparison compare={compare} current={curProduct}/>}
			</Card>
		</ProductContainer>

  )
};
export default ProductCard;