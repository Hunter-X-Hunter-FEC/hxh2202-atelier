import React from 'react';
import {FavImage, FavContainer, FavName} from './styles/FavoriteList.styled.js';
import {IoRemoveCircle} from 'react-icons/io5';

function FavoriteEntry ({remove, favorite}) {
  console.log('favorite entry', favorite);
  return (
    <FavContainer>
			<FavImage src={favorite.style[0].photos[0].url}/>
			<FavName>
			  {favorite.style.name}
			</FavName>
      <IoRemoveCircle size={120} onClick={()=>remove(favorite)}/>
    </FavContainer>
  )
}

export default FavoriteEntry;