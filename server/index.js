const config = require('../config.js');
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

//  Product API

app.get('/products', (req, res) => {
  // console.log(req.query)
  // console.log(req.body)
  // console.log(req.headers)
  console.log(req.url)

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      Accept: 'text',
      'User-Agent': 'request',
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      count: 20
    }
  };

  axios(options)
  .then((result) => {
    console.log(result.data)
    // var data = JSON.parse(results);
    res.send(result.data);
  });
  // res.status(200).send('hello');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

