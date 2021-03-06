// GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products
// GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631
// GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products?page=2
// GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products?count=2&page=2

// params page or count

// {
//     "id": 65631,
//     "campus": "rfp",
//     "name": "Camo Onesie",
//     "slogan": "Blend in to your crowd",
//     "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//     "category": "Jackets",
//     "default_price": "140.00",
//     "created_at": "2022-03-29T15:08:08.445Z",
//     "updated_at": "2022-03-29T15:08:08.445Z",
//     "features": [
//         {
//             "feature": "Fabric",
//             "value": "Canvas"
//         },
//         {
//             "feature": "Buttons",
//             "value": "Brass"
//         }
//     ]
// }

var products_data = [
  {
      "id": 65631,
      "campus": "rfp",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2022-03-29T15:08:08.445Z",
      "updated_at": "2022-03-29T15:08:08.445Z"
  },
  {
      "id": 65632,
      "campus": "rfp",
      "name": "Bright Future Sunglasses",
      "slogan": "You've got to wear shades",
      "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
      "category": "Accessories",
      "default_price": "69.00",
      "created_at": "2022-03-29T15:08:08.445Z",
      "updated_at": "2022-03-29T15:08:08.445Z"
  },
  {
      "id": 65633,
      "campus": "rfp",
      "name": "Morning Joggers",
      "slogan": "Make yourself a morning person",
      "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      "category": "Pants",
      "default_price": "40.00",
      "created_at": "2022-03-29T15:08:08.445Z",
      "updated_at": "2022-03-29T15:08:08.445Z"
  },
  {
      "id": 65634,
      "campus": "rfp",
      "name": "Slacker's Slacks",
      "slogan": "Comfortable for everything, or nothing",
      "description": "I'll tell you how great they are after I nap for a bit.",
      "category": "Pants",
      "default_price": "65.00",
      "created_at": "2022-03-29T15:08:08.445Z",
      "updated_at": "2022-03-29T15:08:08.445Z"
  },
  {
      "id": 65635,
      "campus": "rfp",
      "name": "Heir Force Ones",
      "slogan": "A sneaker dynasty",
      "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      "category": "Kicks",
      "default_price": "99.00",
      "created_at": "2022-03-29T15:08:08.445Z",
      "updated_at": "2022-03-29T15:08:08.445Z"
  }
]

module.exports = products_data;