import styled from 'styled-components';

export const ProdList = styled.div`
width: 100%;
// min-height: 200px
// border: solid purple;
// background-color:purple;
display: flex;
flex-direction: row;
`

export const Title = styled.h3`
// background-color: yellow;
font-size: 30px;
margin: 0px;
`
export const Inner = styled.div`
display: flex;
flex:1;
flex-direction: row;
width:96%;
// overflow:hidden
`


export const btnWrapper = styled.div`
display: flex;
width:2%;
flex:1
margin: 0px;
// background-color: transparent;
postion:relative;
justify-content: center;
align-items: center;
padding-top: 30px;
background-color: black;
`


export const PrevBtn = styled.button`
width: 50px;
height: 50px;
flex-basis:100%;
background-color: transparent;
position: relative;
border:none;
top: 35%;
left: 0;
display: ${props=>props.display}
`

export const NextBtn = styled.button`
width: 50px;
height: 50px;
flex-basis:100%;
background-color: transparent;
position: relative;
border:none;
top: 35%;
right:0;
display: ${props=>props.display}
`

