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