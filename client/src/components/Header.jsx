import React from 'react';
import Logo from '../assets/Logo.png';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styled from 'styled-components';
import {CgDarkMode} from 'react-icons/cg';

const Container = styled.div`
width: 100%;
height: 100px;
display:flex;
flex-direction: row;
justify-content: space-around;
positon: absolute;
background-color: rgba(50, 115, 220, 0.3);
`
const Image = styled.img`
opacity: 0.5;
max-width:100%;
height:auto;
`

const Product = styled.span`
font-size: 50px;
`


function Header({themeToggler}) {
  return (
    <Container>
      <Image src={Logo} alt=""/>
      <Product> Products </Product>
      <AiOutlineShoppingCart size={80}/>
      <CgDarkMode onClick={themeToggler} size={80}/>
    </Container>
  )
}

export default Header;