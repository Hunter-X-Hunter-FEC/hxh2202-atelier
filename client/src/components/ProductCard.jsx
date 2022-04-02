import React from 'react';
import Star from './Star.jsx';
// import styled from 'styled-components';
import {Container, Image} from './styles/container.styled.js';

const ProductCard = (props)=>{
	console.log('props.card', props.card)


  return (
	<Container>
		<div>
			<img src="" alt="" className=""/>
			<span className="">
				{props.card.category}
			</span>
			<h5 className="name">
				<a href="#">{props.card.name}</a>
			</h5>
			<p className="">
				{/* <span>{props.card.price}</span> */}
			</p>
			<div className="rating">Rating:
					<Star />
			</div>
		</div>
	</Container>
  )
};
export default ProductCard;