import styled from 'styled-components';

export const Container = styled.div`
position:absolute;
top:30%;
width: 100%;
height: 1280px;
display: flex;
align-items: center;
justify-content: space-around;
border: blue;
font-family: Arial;
// overflow: hidden
flex-direction: column;
`
export const ProductSection = styled.div`
width: 90%;
height: 640px;
margin: 100px;
border: solid black;
// justify-content: space center;
align-items: center;
flex-basis: 100%;
// flex-shrink: 1;
`


export const FavoriteSection = styled.div`
width: 90%;
height: 640px;
margin: 100px;
border: 2px solid white;
// justify-content: space center;
align-items: center;
flex-basis: 100%;
// flex-shrink: 1;
`