import styled from 'styled-components';

export const FavContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
flex-shrink: 0;
align-items: center;
justify-content: center;
`
export const FavWrapper = styled.div`
flex: 1;
margin: 10px;
postition:relative;
// background-color: pink;
`
export const FavImage = styled.img`
min-width: 320px;
max-width: 320px;
min-height: 460px;
max-height: 460px;
object-fit: cover;
margin-top: 0px;
margin-bottom: 10px;
`
export const FavName = styled.h4`
margin-top:5px;
height:24px;
margin-bottom:6px;

`

export const RemoveBtn = styled.div`
&:hover {
  color: white;
}
height:30px;
width:30px;
margin: 0px;
top:3px;
right:30px;
// background-color: black;
position:relative;
z-index:1000;
align-items: flex-end;
// border:black;
float: right;
display: flex;
`