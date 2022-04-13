//this is for git workflow testing
import React from 'react';
import ProductCard from './ProductCard.jsx';
import {useState, useEffect} from 'react';
import {ProdList, Title, btnWrapper, PrevBtn, NextBtn, Inner} from './styles/ProductList.styled.js';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function ProductList ({curProduct, switchProduct, product}) {
  const length = product.length;
  const [curIndex, setIndex] = useState(0);

  // useEffect(()=>{
  //   if (product.length > 0) {
  //     setProduct(product);
  //   }
  // }, [product])

  const clickPrev = ()=>{
    setIndex(curIndex === 0 ? length-1: curIndex-1)
  }

  const clickNext = ()=> {

    setIndex(curIndex === length-1 ? 0: curIndex+1);

  }


  return (
    <div>
      <Title>Customers Also Viewed</Title>
      <ProdList>
        <btnWrapper>
          <PrevBtn display={curIndex===0 ? 'None' : 'inline'} onClick={clickPrev}>
            <IoIosArrowBack size={50} />
          </PrevBtn>
        </btnWrapper>
        <Inner>
          {product.map((card, index)=> {
            if (index >= curIndex && index<= curIndex+3) {
              return (<ProductCard curProduct={curProduct} key={index} switchProduct={switchProduct} card={card}/>)}})}
        </Inner>
        <btnWrapper>
          <NextBtn display={curIndex ===length-3 ? 'None' : 'inline'} onClick={clickNext}>
            <IoIosArrowForward size={50}/>
          </NextBtn>
        </btnWrapper>
      </ProdList>
    </div>
  )

}

export default ProductList;