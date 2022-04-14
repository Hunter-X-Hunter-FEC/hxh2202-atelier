var meta = {
  "product_id": "65631",
  "ratings": {
      "1": "2",
      "2": "1",
      "3": "7",
      "4": "80",
      "5": "13"
  },
  "recommended": {
      "false": "5",
      "true": "98"
  },
  "characteristics": {
      "Fit": {
          "id": 220230,
          "value": "4.7916666666666667"
      },
      "Length": {
          "id": 220231,
          "value": "4.7708333333333333"
      },
      "Comfort": {
          "id": 220232,
          "value": "4.8333333333333333"
      },
      "Quality": {
          "id": 220233,
          "value": "4.7916666666666667"
      }
  }
}

var numberOfReviews = parseInt(meta.ratings['1']) + parseInt(meta.ratings['2']) + parseInt(meta.ratings['3']) + parseInt(meta.ratings['4']) + parseInt(meta.ratings['5']);
var ones = parseInt(meta.ratings['1']) * 1;
var twos = parseInt(meta.ratings['2']) * 2;
var threes = parseInt(meta.ratings['3']) * 3;
var fours = parseInt(meta.ratings['4']) * 4;
var fives = parseInt(meta.ratings['5']) * 5;


var averageRating = (ones + twos + threes + fours + fives)/numberOfReviews;

averageRating = (Math.round(averageRating * 4) / 4).toFixed(2);


// export default meta;
export default averageRating;