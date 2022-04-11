import React from 'react';
import {FavImage, FavContainer, FavName, RemoveBtn, FavWrapper} from './styles/FavoriteList.styled.js';
import {IoRemoveCircleOutline} from 'react-icons/io5';
import Star from './Star.jsx';
import {ProductCategory,ProductName, ProductPrice} from './styles/productCard.styled.js';
import Logo from '../../assets/Logo.png';

function FavoriteEntry ({remove, favorite}) {
  console.log('favorite entry', favorite);
  return (
    <FavContainer>
      <FavWrapper>
      < RemoveBtn >
          <IoRemoveCircleOutline color={"grey"} background-color={'transparent'} size={30} onClick={()=>remove(favorite)}/>
        </RemoveBtn>
        <FavImage src={favorite.style[0].photos[0].url || Logo}/>
        <ProductCategory>
            {favorite.category}
          </ProductCategory>
          <ProductName>
            {favorite.name}
          </ProductName>
          <ProductPrice>
            <span>${favorite.style[0].original_price}</span>
          </ProductPrice>
          <div className="rating">
              <Star />
          </div>
      </FavWrapper>
    </FavContainer>
  )
}

export default FavoriteEntry;