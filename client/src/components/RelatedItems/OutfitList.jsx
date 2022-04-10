import React from 'react';
import {useState, useEffect} from 'react';
import {VscAdd} from 'react-icons/vsc';
import {IoRemoveCircle} from 'react-icons/io5';
import {Container, AddButton, FavoriteList} from './styles/OutfitList.styled.js';
import FavoriteEntry from './FavoriteEntry.jsx';

function OutfitList({selected}) {
  // var initialState = JSON.parse(window.localStorage.getItem('MyFavorites'));
  console.log('initialState', selected);
  const [favorites, setFavorites] = useState([]);
  // [showFavorite, setShowFavorite] = useState(false);
  console.log('favorites', favorites);


  useEffect(()=>{
    console.log('useEffectGetItemItem is working');
    const data=window.localStorage.getItem('MyFavorites');
    if (Boolean(data)) {
      setFavorites(JSON.parse(data));
    }
  }, [])

  useEffect(()=> {
    console.log('useEffectSetItem is working');
    window.localStorage.setItem('MyFavorites', JSON.stringify(favorites))
  }, [favorites])



  var AddFavoritesHandler = (selected) => {
    // console.log('selected',selected);
    // console.log('testing favorite', favorites);
    // console.log("addFavHandler", favorites.includes(selected));
    const favoriteList = favorites.map(each=>each.id);
    if (favoriteList.includes(selected.id) === false) {
      console.log("addFavHandler", favorites.includes(selected))
      setFavorites([...favorites, selected]);
    }

  }

  var removeFavHandler = (selected)=>{
    setFavorites(()=>favorites.filter((item)=>item !== selected));
  }

  return (
    <Container>
      <AddButton onClick={()=>AddFavoritesHandler(selected)}>
        <VscAdd size={120}/>
      </AddButton>
      <FavoriteList>
        {(favorites.length) > 0 && favorites.map((favorite)=><FavoriteEntry remove={removeFavHandler} favorite={favorite}/>)}
      </FavoriteList>
    </Container>
  )
};

export default OutfitList;
