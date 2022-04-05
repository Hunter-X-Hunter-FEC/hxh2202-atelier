const axios = require ('axios');
// const API_KEY = require('../config.js');

const getProduct = ()=>{
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products', {headers: {
    Authorization: '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'
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

module.exports = {
  getProduct: getProduct,
  getProductDetails: getProductDetails,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts
};