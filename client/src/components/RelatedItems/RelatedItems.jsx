import React from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';
import request from '../Request.js';
import OutfitList from './OutfitList.jsx';
import 'regenerator-runtime/runtime';
import {useParams, useNavigate} from "react-router-dom";
import {Container, Seperator, ProductSection, FavoriteSection} from './styles/container.styled.js';


import {useState, useEffect} from 'react';

function RelatedItems({selected}) {
  const {productId} = useParams();
  const[curProductID, setCurProductID] = useState(productId)
  const[curProduct, setCurProduct] = useState(selected)
  const[relatedProducts, setProduct] = useState([])
  let navigate = useNavigate();

  useEffect(()=>{
      setProduct(relatedProducts)
  }, [relatedProducts])

  useEffect(()=>{
    const fectchData = async() =>{
    const related = await request.getRelatedProducts(productId);
    const detailsRes = await Promise.all(related.data.map(each=>request.getProductDetails(each)));
    const stylesRes = await Promise.all(related.data.map(each=>request.getProductStyles(each)));
    const details = detailsRes.map(each=>each.data);
    const styles = stylesRes.map(each=>each.data);

    for (let detail of details) {
      for (let style of styles) {
        if (detail.id.toString() === style.product_id) {

          detail['style'] = style.results;
        }
      }
    }
    setProduct(details);
    }

    fectchData();
  }, [curProduct])

  const handleProductClick = (newProduct)=>{
    setCurProduct(newProduct);
    setCurProductID(newProduct.id);
    navigate(`/product/${newProduct.id}`);
  }

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