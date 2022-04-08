import React from 'react';
import {FavImage, FavContainer, FavName, RemoveBtn, FavWrapper} from './styles/FavoriteList.styled.js';
import {IoRemoveCircleOutline} from 'react-icons/io5';

function FavoriteEntry ({remove, favorite}) {
  console.log('favorite entry', favorite);
  return (
    <FavContainer>
      <FavWrapper>
        <FavImage src={favorite.style[0].photos[0].url}/>
        <FavName>
          {favorite.name}
        </FavName>
        < RemoveBtn >
          <IoRemoveCircleOutline color={"white"} background-color={'transparent'} size={50} onClick={()=>remove(favorite)}/>
        </RemoveBtn>
      </FavWrapper>
    </FavContainer>
  )
}

export default FavoriteEntry;