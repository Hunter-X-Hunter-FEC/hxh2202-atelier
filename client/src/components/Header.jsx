import React from 'react';
import Logo from '../assets/Logo.png';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styled from 'styled-components';
import {CgDarkMode} from 'react-icons/cg';
import {Link} from "react-router-dom";

const Container = styled.div`
width: 100%;
height: 100px;
display:flex;
flex-direction: row;
justify-content: space-around;
positon: absolute;
background-color: rgba(50, 115, 220, 0.3);
`
const Title = styled.h2`
opacity: 0.5;
font-size: 35px;
max-width:100%;
flex-basis: 30%;
top: 0px;
margin:10px;
`

const Product = styled.span`
margin-bottom: 30px;
font-size: 35px;
flex-basis: 50%
color: black;
`


function Header({themeToggler, showAll}) {
  return (
    <Container>
      <Title size={50} >Hunter Shop</Title>
      <Product>
        <Link to='/'>Products</Link>
      </Product>
      <Link to='products/checkout'><AiOutlineShoppingCart  size={50}/></Link>
      <CgDarkMode onClick={themeToggler} size={50}/>
    </Container>
  )
}

export default Header;