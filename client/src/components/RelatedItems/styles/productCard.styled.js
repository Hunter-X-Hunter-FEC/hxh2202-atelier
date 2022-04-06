import styled from 'styled-components';

export const ProductContainer = styled.div`
display: flex;
flex-direction: row;
flex-shrink: 0;
width: 25%;
heights: 250px;
background-color: green;
`
export const Card = styled.div`
flex: 1;
margin: 5px;
background-color:red;
border: solid black
`

export const ProductImage = styled.img`
width:95%;
boder-radius: 12px;
// height: 70%;
object-fit: fill;
`
export const ProductCategory = styled.div`
margin-top:5px;
height:24px;
margin-bottom:6px;
`
export const ProductName = styled.h4`
margin-top:5px;
height:24px;
margin-bottom:6px;
`
export const ProductPrice = styled.p`
margin-top:5px;
margin-bottom:10px;
`
export const ProductRating = styled.div`
margin-bottom: 2px;
padding-top:5px;
`
