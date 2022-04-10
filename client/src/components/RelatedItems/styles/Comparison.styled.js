import styled from 'styled-components';

export const Container = styled.div`
width: 450px;
height: 360px;
// border:1px solid black;
background-color: pink;
position: fixed;
z-index: 1;
left: 30%;
top: 50%;
width: 30%;
height: 30%;
overflow: auto;
`

export const Table = styled.table`
table-layout:fixed;
border-collapse: collapse;
grid-template-column: repeat(3, 150px);
margin: auto;
`

export const Header = styled.tr`
font:sans-serif;
width:100%
font-size: 20px;
letter-spacing: 2px;
display: flex;
flex-direction: row;
// background-color:yellow;

`

export const DataWrapper = styled.div`

`

export const HeaderData = styled.th`
border:black;
flex: 1
`

export const Data1 = styled.td`
font:sans-serif;
font-size: 15px;
width: 150px;
letter-spacing: 2px;
// background-color: red;
vertical-align: middle;
text-align: center
`

export const Data2 = styled.td`
font:sans-serif;
font-size: 15px;
width: 150px;
letter-spacing: 2px;
// background-color: yellow;
align: center;
justify-content: center;
`

export const Data3 = styled.td`
font:sans-serif;
font-size: 15px;
width: 150px;
letter-spacing: 2px;
// background-color: blue;;
vertical-align: middle;
text-align: center
`