import styled from 'styled-components';

export const ProductContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
flex-shrink: 0;
align-items: center;
justify-content:center;
`

export const Card = styled.div`
flex: 1;
margin: 5px;
// background-color:red;
// border: solid black
padding: 10px;
position:relative;
`

export const CompareWrapper = styled.div`
align-items: flex-end;
height:30px;
width:30px;
top:5px;
// background-color: black;
right:28px;
z-index: 1001;
position:relative;
margin: 0px;
align-items: flex-end;
// border:black;
display: flex;
float:right;
`


export const ProductImage = styled.img`
width: 320px;
min-height: 460px;
max-height: 460px;
object-fit: cover;
`
export const ProductCategory = styled.div`
margin-top:5px;
height:24px;
margin-bottom:6px;
text-align:center;
// flex-basis:10%;
`
export const ProductName = styled.h4`
margin-top:5px;
height:24px;
margin-bottom:6px;
text-align:center;
// flex-basis:10%
`
export const ProductPrice = styled.p`
margin-top:5px;
margin-bottom:10px;
text-align:center;
// flex-basis:10%;
`
export const ProductRating = styled.div`
align-content: center;
align-items:Center;
text-align:center;
margin-bottom: 2px;
padding-top:5px;
// flex-basis:10%;
`
