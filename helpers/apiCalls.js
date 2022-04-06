const axios = require('axios');
const config = require('../config.js');

let getAllProducts = () => {
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }
}