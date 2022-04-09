const axios = require ('axios');
// const API_KEY = require('../config.js');

const getProducts = ()=>{
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products', {headers: {
    Authorization: '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',
    count: 5
  }});
};

const getProductDetails = (id)=>{
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {headers: {
    Authorization: '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'
  }});
};

const getProductStyles = (id)=>{
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`, {headers: {
    Authorization: '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'
  }});
};

const getRelatedProducts = (id)=>{
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/related`, {headers: {
    Authorization: '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'
  }});
};

const getReviews = (id)=>{
  var obj = {
    params: {
      product_id: id
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

module.exports = {
  getProducts: getProducts,
  getProductDetails: getProductDetails,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getReviews: getReviews,
  getMetaReviews: getMetaReviews
};