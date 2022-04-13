import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {useState, useEffect} from 'react';
// import {ReviewStar} from './styles/productCard.styled.js';
import Request from '../Request.js';

const Star = ({card})=>{

  const [relatedRating, setRelatedRating] = useState(0);

  useEffect(()=>{
    var getAvgRatings = async()=>{
      const response= await Request.getMetaReviews(card.id);
      let ratings = response.data.ratings;
      console.log('relatedItem rating', ratings);
      let ratingTotal = 0;
      let ratingCount = 0
      for (let key in ratings) {
         ratingTotal+= Number(key) * Number(ratings[key]);
         ratingCount += Number(ratings[key]);
      }
      setRelatedRating(ratingTotal / ratingCount);
    }
    getAvgRatings()

  }, []);

  useEffect(()=>{
    setRelatedRating(relatedRating)
  }, [relatedRating])


  return (
    <div>
      <span>
      <AiFillStar color = {relatedRating >= 1 ? 'orange' : 'none'}/>
      </span>
      <span>
        <AiFillStar color = {relatedRating >= 2 ? 'orange' : 'none'}/>
      </span>
      <span>
        <AiFillStar color = {relatedRating >= 3 ? 'orange' : 'none'}/>
      </span>
      <span>
        <AiFillStar color = {relatedRating >= 4 ? 'orange' : 'none'} />
      </span>
      <span>
        <AiFillStar color = {relatedRating == 5 ? 'orange' : 'none'}/>
      </span>
    </div>
  )
};

export default Star;