import styled from 'styled-components';

export const ProductContainer = styled.div`
display: flex;
flex-direction: row;
flex-shrink: 0;
width: 25%;
heights: 250px;
background-color: green;
judtify contents:space-around;
// position:relative;
`
export const compareWrapper = styled.div`
top:0px;
right:0px;
z-index: 1000;
position:relative;
`

export const Card = styled.div`
flex: 1;
margin: 5px;
background-color:red;
border: solid black
padding: 10px;
display:flex;
flex-direction:column;
`

export const ProductImage = styled.img`
width: 95%;
height: 80%;
// aspect-ratio: 1/1;
boder-radius: 12px;
// height: 60%;
object-fit: fill;
// flex-basis:100%;
`
export const ProductCategory = styled.div`
margin-top:5px;
height:24px;
margin-bottom:6px;
// flex-basis:10%;
`
export const ProductName = styled.h4`
margin-top:5px;
height:24px;
margin-bottom:6px;
// flex-basis:10%
`
export const ProductPrice = styled.p`
margin-top:5px;
margin-bottom:10px;
// flex-basis:10%;
`
export const ProductRating = styled.div`
margin-bottom: 2px;
padding-top:5px;
// flex-basis:10%;
`
