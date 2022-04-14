import React from 'react';
import {useState, useEffect} from 'react';
import {VscAdd} from 'react-icons/vsc';
import {IoRemoveCircle} from 'react-icons/io5';
import {Container, AddButton, FavoriteList} from './styles/OutfitList.styled.js';
import FavoriteEntry from './FavoriteEntry.jsx';

function OutfitList({selected}) {


  const [favorites, setFavorites] = useState([]);




  useEffect(()=>{

    const data=window.localStorage.getItem('MyFavorites');
    if (Boolean(data)) {
      setFavorites(JSON.parse(data));
    }
  }, [])

  useEffect(()=> {

    window.localStorage.setItem('MyFavorites', JSON.stringify(favorites))
  }, [favorites])



  var AddFavoritesHandler = (selected) => {

    const favoriteList = favorites.map(each=>each.id);
    if (favoriteList.includes(selected.id) === false) {
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
