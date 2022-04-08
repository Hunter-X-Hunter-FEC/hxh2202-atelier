import React from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';
import request from '../Request.js';
import OutfitList from './OutfitList.jsx';
import 'regenerator-runtime/runtime';
import {Container, Seperator, ProductSection, FavoriteSection} from './styles/container.styled.js';


import {useState, useEffect} from 'react';

function RelatedItems({selProduct}) {
  const[curProduct, setCurProduct] = useState(selProduct)
  const[relatedProducts, setProduct] = useState([])

  useEffect(()=>{
      setProduct(relatedProducts)
  }, [relatedProducts])

  useEffect(()=>{
    console.log('useEffect is working')
    console.log('id', curProduct.id);
    const fectchData = async() =>{
    const related = await request.getRelatedProducts(curProduct.id);
    console.log('related', related);
    const detailsRes = await Promise.all(related.data.map(each=>request.getProductDetails(each)));
    const stylesRes = await Promise.all(related.data.map(each=>request.getProductStyles(each)));
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
    console.log('consolidated', details);
    // const Product = Object.assign(details, styles);
    setProduct(details);
    }

    fectchData();
  }, [curProduct])

  const handleProductClick = (newProduct)=>{
    setCurProduct(newProduct);
  }
  console.log('after fetch', relatedProducts);
  return (
    <Container>
      <ProductSection>
        <ProductList switchProduct={handleProductClick} curProduct={curProduct} product={relatedProducts}/>
      </ProductSection>
      <FavoriteSection>
        <OutfitList selected={curProduct} />
      </FavoriteSection>
    </Container>
  )
}

export default RelatedItems;