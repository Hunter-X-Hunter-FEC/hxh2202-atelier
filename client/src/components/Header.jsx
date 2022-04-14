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
const Image = styled.img`
opacity: 0.5;
max-width:100%;
height:auto;
flex-basis: 30%;
`

const Product = styled.span`
margin-bottom: 30px;
font-size: 50px;
flex-basis: 50%
`


function Header({themeToggler, showAll}) {
  return (
    <Container>
      <Image src={Logo} alt=''/>
      <Product>
        <Link to='/'>Products</Link>
      </Product>
      <Link to='products/checkout'><AiOutlineShoppingCart  size={50}/></Link>
      <CgDarkMode onClick={themeToggler} size={50}/>
    </Container>
  )
}

export default Header;