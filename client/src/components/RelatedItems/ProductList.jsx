//this is for git workflow testing
import React from 'react';
import ProductCard from './ProductCard.jsx';
import {ProdList} from './styles/ProductList.styled.js';

function ProductList ({product}) {
  console.log('product', product);

  return (
    <div>
      <h3>Customers Also Viewed</h3>
      <ProdList>
          {product.map((card, index)=>(<ProductCard key={index} card={card}/>))}
      </ProdList>
    </div>
  )

}

export default ProductList;