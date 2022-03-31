import React from "react";
import addToCart from './addToCart.jsx';
import imageGallery from './imageGallery.jsx';
import productInformation from './productInformation.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: [],
      productsData: []
      // do we need to grab data from other API's and place it here?
    };

  }

  // need axios get request here to grab the data to populate state?
  //get request to /products, /products/:products_id, /products/:product_id/styles, /products:product_id/related --> do we need different get requests for all these?


  render() {
    return (
      <div>
        <div><imageGallery/></div>
        <div><productInformation/></div>
        <div><styleSelector/></div>
        <div><addToCart/></div>
      </div>
    );
  }
}

export default Overview;