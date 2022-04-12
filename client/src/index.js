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
import {getProducts, getProductDetails, getProductStyles} from './components/Request.js';
import Catalog from './components/Catalog/Catalog.jsx';
import RelatedItems from './components/RelatedItems/RelatedItems.jsx';
import {AiOutlineShoppingCart} from 'react-icons/ai';
// import Overview from './components/Overview/Overview.jsx';
import 'regenerator-runtime/runtime'
const request = require('./components/Request.js');
import Overview from './components/Overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import Modal from './components/RatingsAndReviews/Modal.jsx';
import {BrowserRouter, Routes, Link, Route} from "react-router-dom";

function App(){

  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('catalog');
  const [allProducts, setAllProduct] = useState([]);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  /*
  the communication between RatingsAndReviews and Overview so that the stars
  in Overview will be the same as in RatingsAndReviews, Overview reads the
  avgRating through props and RatingsAndReviews invokes setAvgRating also
  through props
  */
  var [avgRating, setAvgRating] = useState(0);

  // useEffect(()=>{
  //   // console.log('localStorage Effect is working')
  //   setAllProduct(localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : allProducts)
  // }, [])

  useEffect(()=>{
    // console.log('Catalog useEffect is working')
    const fectchData = async() =>{
      const allProducts = await request.getProducts();
      console.log('allProducts', allProducts);
      const detailsRes = await Promise.all(allProducts.data.map(each=>request.getProductDetails(each.id)));
      const stylesRes = await Promise.all(allProducts.data.map(each=>request.getProductStyles(each.id)));
      const details = detailsRes.map(each=>each.data);
      const styles = stylesRes.map(each=>each.data);
      // console.log('details', details);
      // console.log('styles', styles);
      for (let detail of details) {
        // console.log('product', typeof(product.id));
        for (let style of styles) {
          // console.log('--------style------', typeof(style.product_id));
          if (detail.id.toString() === style.product_id) {
            // console.log('--------2------');
            detail['style'] = style.results;
          }
        }
      }
      // console.log('consolidated', details);
      // const Product = Object.assign(details, styles);
      setAllProduct(details);
    }
    // if (!isCancelled){
    //   fectchData();
    // }
      fectchData();

    // return ()=>{
    //   isCancelled = true;
    // }
  }, [])

  useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(allProducts))
  }, [allProducts])

  const themeToggler = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const setAllProducts = ()=>{
    // console.log('all is triggering');
    setAllProduct(localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : allProducts)
    // setView('catalog')
  }

  const selectProduct = (product)=> {
    console.log('select is triggering', product);
    setSelected(product);
    // setView('details')
    // navigate(`/product/${product.id}`);
  }

  console.log('allProduct', allProducts);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />


        {(view === 'details') && <RatingsAndReviews product={selected} setShowModal={setShowModal} showModal={showModal}/> }
          <BrowserRouter>
            <nav>
              <Header showAll={setAllProducts} themeToggler={themeToggler} />
            </nav>
            <Routes>
              <Route path='/' element={<Catalog Catalog selector={selectProduct} allProducts={allProducts}/>}/>
              {/* <Route path='/product/:productId' element ={<> <Overview product={selected}/> <RelatedItems selected={selected}/> <RatingsAndReviews selected={selected} setShowModal={setShowModal} showModal={showModal}/> {showModal && <Modal setShowModal={setShowModal} product={selected}/>}</>}/> */}
              <Route path='/product/:productId' element ={<> <Overview product={selected}/> </>}/>
              {/* <Route path='/checkout' element={<Checkout/>} /> */}

              {/* {(view === "catalog") && <Catalog selector={selectProduct} allProducts={allProducts}/>}
              {(view ==="details") && <RelatedItems selProduct={selected}/>} */}
            </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );

}



ReactDOM.render(<App />, document.getElementById('atelier'));

