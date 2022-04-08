import styled from 'styled-components';

export const ProductContainer = styled.div`
display: flex;
flex-direction: row;
flex-shrink: 0;
width: 25%;
heights: 250px;
// background-color: green;
judtify contents:space-around;
// postition:relative;
`

export const Card = styled.div`
flex: 1;
margin: 5px;
// background-color:red;
// border: solid black
padding: 10px;
// display:flex;
// flex-direction:column;
postition:relative;
`

export const CompareWrapper = styled.div`
height:30px;
width:30px;
top:30px;
background-color; black;
right:15px;
// z-index: 1001;
position:relative;
align-items: flex-end;
// border:black;
float: right;
display: flex;
`


export const ProductImage = styled.img`
width: 100%;
height: 80%;
top: 5px;
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
