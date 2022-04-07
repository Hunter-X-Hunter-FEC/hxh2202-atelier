const axios = require ('axios');
// const API_KEY = require('../config.js');

const getProducts = ()=>{
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
  getProducts: getProducts,
  getProductDetails: getProductDetails,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts
};