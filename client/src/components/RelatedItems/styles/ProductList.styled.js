import styled from 'styled-components';

export const ProdList = styled.div`
width: 100%;
// min-height: 200px
border: solid purple;
background-color:purple;
display: flex;
flex-direction: row;
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
background-color: black;
postion:relative;
justify-content: center;
align-items: center
`


export const PrevBtn = styled.button`
width: 50px;
height: 50px;
flex-basis:100%;
border-radius: 60%;
border: solid black;
background-color:yellow;
position: absolute;
top: 15%;
display: ${props=>props.display}
`

export const NextBtn = styled.button`
width: 50px;
height: 50px;
flex-basis:100%;
border-radius: 60%;
border: solid black;
background-color:yellow;
position: absolute;
top: 15%;
display: ${props=>props.display}
`

