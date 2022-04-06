// const config = require('../config.js');
require('dotenv').config();
// console.log(process.env);
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 3005;
const axios = require('axios');

let app = express();

// serves all static files and generated assets in ../../client/dist
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json())

var apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp`

/*

CALLS TO API FOR PRODUCT

*/

// This is the '/product' call, for all products, likely to be used in the catalog page.
app.get('/products', (req, res) => {
  // console.log(req.query)
  // console.log(req.body)
  // console.log(req.headers)
  // console.log(req.url)

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      count: 20
    }
  };

  axios(options)
  .then((result) => {
    console.log(result.data)
    res.send(result.data);
  });
})

// This is the '/product' call, for all products, likely to be used in the catalog page.
app.get('/products/:product_id', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    }
  };

  axios(options)
  .then((result) => {
    res.send(result.data);
  });

})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

