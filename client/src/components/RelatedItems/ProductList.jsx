//this is for git workflow testing
import React from 'react';
import ProductCard from './ProductCard.jsx';
import {useState, useEffect} from 'react';
import {ProdList, PrevBtn, NextBtn, Inner} from './styles/ProductList.styled.js';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function ProductList ({curProduct, switchProduct, product}) {
  console.log('product', product);
  console.log('productList selected', curProduct);
  const length = product.length;
  const [curIndex, setIndex] = useState(0);

  // useEffect(()=>{
  //   if (product.length > 0) {
  //     setProduct(product);
  //   }
  // }, [product])

  const clickPrev = ()=>{
    console.log('left click is working')
    setIndex(curIndex === 0 ? length-1: curIndex-1)
  }

  const clickNext = ()=> {
    console.log('right click is working');
    setIndex(curIndex === length-1 ? 0: curIndex+1);
    console.log('nextIndex', curIndex);
  }


  return (
    <div>
      <h3>Customers Also Viewed</h3>
      <ProdList>
        <Inner>
          {product.map((card, index)=> {
            if (index >= curIndex && index<= curIndex+3) {
              console.log('curProductPassed', curProduct);
              return (<ProductCard curProduct={curProduct} key={index} switchProduct={switchProduct} card={card}/>)}})}
        </Inner>
        {curIndex===length-4 && <PrevBtn onClick={clickPrev}>
          <IoIosArrowBack />
        </PrevBtn>}
         {curIndex===0 && <NextBtn onClick={clickNext}>
          <IoIosArrowForward/>
        </NextBtn>}
      </ProdList>
    </div>
  )

}

export default ProductList;