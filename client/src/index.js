/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, David Liang, Bogdan Gordin
3/29/22
our Atelier App, will contain all of the componant modules
*/
import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './assets/themes.js';

function App(){

  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('catalog');
  const [allProducts, setAllProduct] = useState([]);
  const [selected, setSelected] = useState([]);


  const themeToggler = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header themeToggler={themeToggler} />
      </>
    </ThemeProvider>
  );

}

ReactDOM.render(<App />, document.getElementById('app'));