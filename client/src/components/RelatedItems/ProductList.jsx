//this is for git workflow testing
import React from 'react';
import ProductCard from './ProductCard.jsx';
import {useState, useEffect} from 'react';
import {ProdList, PrevBtn, NextBtn, Inner} from './styles/ProductList.styled.js';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function ProductList ({product}) {
  console.log('product', product);
  const [productToRender, setProduct] = useState(product);
  const [curIndex, setIndex] = useState(0);
  const [disableLeftButton, setLeftDisable] = useState(false);
  const [disableRightButton, setRightDisable] = useState(true);

  useEffect(()=>{
    if (product.length > 0) {
      setProduct(product);
    }
  }, [product])

  console.log('productToRender', productToRender);
  const clickPrev = ()=>{
    console.log('left click is working')
    if (curIndex > 1) {
      setIndex(curIndex=>curIndex-1)
      setProduct(productToRender.slice(curIndex, curIndex+4));
    } else if (curIndex === 0) {
      setLeftDisable(true)
    }
  }

  const clickNext = ()=> {
    console.log('right click is working');
    if (curIndex + 4 < product.length) {
      setIndex(curIndex=>curIndex+1)
      console.log('prevcurIndex', curIndex);
      setProduct(productToRender.slice(curIndex, curIndex+4));
    } else if (curIndex + 4 >= productToRender.length) {
      setRightDisable(true)
    }
    console.log('nextIndex', curIndex);
  }


  return (
    <div>
      <h3>Customers Also Viewed</h3>
      <ProdList>
        <Inner>
          {productToRender.map((card, index)=>(<ProductCard key={index} card={card}/>))}
        </Inner>
        {disableLeftButton && <PrevBtn onClick={clickPrev}>
          <IoIosArrowBack />
        </PrevBtn>}
         {disableRightButton && <NextBtn onClick={clickNext}>
          <IoIosArrowForward/>
        </NextBtn>}
      </ProdList>
    </div>
  )

}

export default ProductList;