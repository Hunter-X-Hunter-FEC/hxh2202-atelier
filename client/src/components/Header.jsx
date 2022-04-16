import React from 'react';
import Logo from '../assets/Logo.png';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styled from 'styled-components';
import {CgDarkMode} from 'react-icons/cg';
import {Link} from "react-router-dom";

const Container = styled.div`
width: 100wm;
height: 100px;
display:flex;
flex-direction: row;
justify-content: space-around;
positon: absolute;
background-color: rgba(50, 115, 220, 0.3);
`
const Title = styled.h2`
margin-top: 30px;
margin-left: 20px;
opacity: 0.5;
font-size: 50px;
max-width:100%;
flex-basis: 85%;
`

const Icons = styled.div`
margin-top: 30px;
opacity: 0.5;
font-size: 30px;
max-width:100%;
flex-basis: 15%;
display: flex;
`

const Product = styled.span`
margin-top:20px;
font-size: 35px;
color: black;
// background-color:black;
flex-basis:50%;
`
const DarkButton = styled.div`
margin-top: 25px;
margin-left: 20px;
`


function Header({themeToggler, showAll}) {
  return (
    <Container>
      <Title size={50} >Hunter Shop</Title>
      <Icons>
        <Product>
          <Link style={{color:'black'}} to='/'>Products</Link>
        </Product>
        {/* <Link to='products/checkout'><AiOutlineShoppingCart  size={30}/></Link> */}
        <DarkButton>
          <CgDarkMode onClick={themeToggler} size={30}/>
        </DarkButton>
      </Icons>
    </Container>
  )
}

export default Header;