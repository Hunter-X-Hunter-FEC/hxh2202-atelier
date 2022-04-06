import styled from 'styled-components';

export const ProdList = styled.div`
display: flex;
width: 100%;
min-height: 200px
position: relaive;
`
export const Inner = styled.div`
display: flex;
flex-direction: row;
overflow:hidden
`
export const PrevBtn = styled.button`
width: 50px;
height: 50px;
border-radius: 60%;
border: solid black;
position: absolute;
top: 40%;
transform: translatey(-50%);
left: -10px;

`

export const NextBtn = styled.button`
width: 50px;
height: 50px;
border-radius: 60%;
border: solid black;
position: absolute;
top: 80%
transform: translatey(-50%);
right: -10px;
`

