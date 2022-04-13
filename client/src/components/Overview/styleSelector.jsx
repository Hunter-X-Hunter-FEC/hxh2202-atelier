/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
style selector
a containiter with multiple styles to choose from, same as from style list, each changes the product style/color
upon selected style it will have a checkmark to indicate it's the currently selected
*/

import React, { useState, useReducer, useEffect, useCallback } from "react";
import { render } from "react-dom";
import styled from "styled-components";




function StyleSelector(props) {

  // console.log(props.product);


  var chosenStyleCont = function (e) {
    e.preventDefault();
    // console.log('from the style container: ');
    props.chosenStyle(e);
  }



  return (
    <section id='StyleSelector' style={StyleSelectorStyle}>{props.product.style.map((st, idx) =>
      <StyleCont backgroundImage={st.photos[0].thumbnail_url} id={`S${idx + 1}`} data-value={idx} onClick={(e) => { chosenStyleCont(e); }}>S{idx + 1}</StyleCont>)}
    </section>
  )
};

export default StyleSelector;




var StyleSelectorStyle = {
  width: 400,
  // borderRadius: '10px',
  float: 'left',
  display: 'inline',
  // backgroundColor: 'white',
  // border: 'solid black',
  padding: '15px',
  marginLeft: '90px',
};

var StyleCont = styled.div`
  color: white;
  display: inline-block;
  text-align: center;
  border-radius: 45%;
  background-color: white;
  border: solid black;
  padding: 7px;
  margin: 7px;
  width: 55;
  height: 55;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

// background-image: ${props => props.thumb}


var images = [
  ['./public/desg1.jpg', './public/desg2.jpg', './public/desg3.jpg'],
  ['./public/flower1.jpg', './public/flower2.jpg', './public/flower3.jpg'],
  ['./public/food1.jpg', './public/food2.jpg', './public/food3.jpg'],
  ['./public/sport1.jpg', './public/sport2.jpg', './public/sport3.jpg']
];


// <ul>{props.product.features.map((ft) =>
//           <FtList ><span>{ft.feature}</span>{(ft.value !== null) && <span> {ft.value}</span>}</FtList>)}
//         </ul>

// {
//   "id": 65634,
//   "campus": "rfp",
//   "name": "Slacker's Slacks",
//   "slogan": "Comfortable for everything, or nothing",
//   "description": "I'll tell you how great they are after I nap for a bit.",
//   "category": "Pants",
//   "default_price": "65.00",
//   "created_at": "2022-03-29T15:08:08.445Z",
//   "updated_at": "2022-03-29T15:08:08.445Z",
//   "features": [
//       {
//           "feature": "Fabric",
//           "value": "99% Cotton 1% Elastic"
//       },
//       {
//           "feature": "Cut",
//           "value": "Loose"
//       }
//   ],
//   "style": [
//       {
//           "style_id": 404890,
//           "name": "Black",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": true,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352394": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352395": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352396": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352397": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352398": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352399": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404891,
//           "name": "Olive Green",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352400": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352401": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352402": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352403": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352404": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352405": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404892,
//           "name": "Grey",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352406": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352407": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352408": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352409": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352410": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352411": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404893,
//           "name": "Tan",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352412": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352413": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352414": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352415": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352416": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352417": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404894,
//           "name": "Red",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352418": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352419": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352420": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352421": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352422": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352423": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404895,
//           "name": "Pinstripe",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352424": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352425": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352426": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352427": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352428": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352429": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404896,
//           "name": "Khaki",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352430": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352431": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352432": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352433": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352434": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352435": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404897,
//           "name": "Plaid",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352436": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352437": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352438": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352439": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352440": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352441": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       },
//       {
//           "style_id": 404898,
//           "name": "White",
//           "original_price": "65.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ],
//           "skus": {
//               "2352442": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352443": {
//                   "quantity": 16,
//                   "size": "S"
//               },
//               "2352444": {
//                   "quantity": 17,
//                   "size": "M"
//               },
//               "2352445": {
//                   "quantity": 10,
//                   "size": "L"
//               },
//               "2352446": {
//                   "quantity": 15,
//                   "size": "XL"
//               },
//               "2352447": {
//                   "quantity": 6,
//                   "size": "XXL"
//               }
//           }
//       }
//   ]
// }