import React from "react";

const productInformation = (props) => {
//how to do populate this from the data incoming? Because it's only one thing rather than the multiple things? pass down selected data from overview as props

//first thing from data, but change if something selected?
  return (
    <div>
      <div>Average Rating</div>
      <div>Product Category</div>
      <div>Product Title</div>
      <div>Price</div>
      <div>Product Description</div>
      <div>Share on Social Media</div>
    </div>
  )
};

export default productInformation;