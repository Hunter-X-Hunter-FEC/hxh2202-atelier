//this is for git workflow testing
import React from 'react';
import ProductCard from './ProductCard.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
          {this.props.render.map(card=> (<ProductCard key={card.id} card={card}/>))}
      </div>
    )
  };

}

export default ProductList;