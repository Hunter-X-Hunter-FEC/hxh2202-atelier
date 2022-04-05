// GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/?product_id=65631
// GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/?product_id=65631&sort=newest
// GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/?product_id=65631&sort=newest&page=1&count=1

var reviews_data = {
  "product": "65631",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 1136187,
          "rating": 4,
          "summary": "This product was ok!",
          "recommend": false,
          "response": "",
          "body": "I really did not like this product solely because I am tiny and do not fit into it.",
          "date": "2019-01-11T00:00:00.000Z",
          "reviewer_name": "mymainstreammother",
          "helpfulness": 5,
          "photos": []
      },
      {
          "review_id": 1155698,
          "rating": 5,
          "summary": "This is a test review from Danny",
          "recommend": true,
          "response": null,
          "body": "Wow, I love this jacket, it's so warm, and fluffy!",
          "date": "2022-03-31T00:00:00.000Z",
          "reviewer_name": "Danny",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1155700,
          "rating": 5,
          "summary": "The Catalina Wine Mixer is awesome",
          "recommend": true,
          "response": null,
          "body": "Man, Can't believe Team Demon Slayers shows up on your get request huh??!? - signed TCWM",
          "date": "2022-03-31T00:00:00.000Z",
          "reviewer_name": "funtime",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1155696,
          "rating": 5,
          "summary": "The Catalina Wine Mixer is awesome",
          "recommend": true,
          "response": null,
          "body": "Man, Can't believe Team Demon Slayers shows up on your get request huh??!? - signed TCWM",
          "date": "2022-03-29T00:00:00.000Z",
          "reviewer_name": "funtime",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1155695,
          "rating": 5,
          "summary": "Does this work?",
          "recommend": true,
          "response": null,
          "body": "I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.",
          "date": "2022-03-29T00:00:00.000Z",
          "reviewer_name": "funtime",
          "helpfulness": 0,
          "photos": []
      }
  ]
}

module.exports = reviews_data;