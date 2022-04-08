import styled from 'styled-components';

export const FavContainer = styled.div`
// heights: 100vh;
display:flex;
border: solid black;
// background-color: yellow;
font-family:sans-serif;
justify-content: center;
`
export const FavWrapper = styled.div`
// flex: 1
// flex-basis: 33%;
min-width:33%;
// flex: 1 1 1 1
// background-color: pink;
position: relative;
margin: 5px;
`
export const FavImage = styled.img`
width:380px;
boder-radius: 12px;
height: 480px;
object-fit: fill;

`
export const FavName = styled.h4`
margin-top:5px;
height:24px;
margin-bottom:6px;
`

export const RemoveBtn = styled.div`
// &:hover {
//   display: none;
// }
position:absolute;
top:5px;
right:5px;
&:hover {
  color: white;
}
`