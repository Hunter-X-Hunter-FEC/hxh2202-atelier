const axios = require ('axios');
// const API_KEY = require('../config.js');

const getProducts = ()=>{
  return axios.get('/products');
};

const getProductDetails = (id)=>{
  return axios.get(`/products/${id}`);
};

const getProductStyles = (id)=>{
  return axios.get(`/products/${id}/styles`);
};

const getRelatedProducts = (id)=>{
  return axios.get(`/products/${id}/related`);
};

const getReviews = (id, reviewPageNumber = 1)=>{
  var obj = {
    params: {
      product_id: id,
      count: 10,
      page: reviewPageNumber
    }
  }
  console.log('obj.params.product_id inside of getReviews: ', obj.params.product_id);
  return axios.get(`/reviews`, obj)
};

const getMetaReviews = (id) => {
  var obj = {
    params: {
      product_id: id
    }
  }
  console.log('obj.params.product_id inside of getReviews: ', obj.params.product_id);
  return axios.get(`/reviews/meta`, obj)
}

const postReview = (data) => {
  return axios.post('/reviews', data).then((result) => console.log('result in postReview: ', result));
}

module.exports = {
  getProducts: getProducts,
  getProductDetails: getProductDetails,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getReviews: getReviews,
  getMetaReviews: getMetaReviews,
  postReview: postReview
};