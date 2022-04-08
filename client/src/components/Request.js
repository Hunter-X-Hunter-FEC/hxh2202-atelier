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

module.exports = {
  getProducts: getProducts,
  getProductDetails: getProductDetails,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts
};