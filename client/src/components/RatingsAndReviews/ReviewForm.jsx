import React, { useState, useEffect } from 'react';
import StarsRating from '../Ratings/StarsRating.jsx';
import styled from 'styled-components';
const request = require('../Request.js');



const ReviewForm = (props) => {
  const [formValues, setFormValues] = useState({
    rating: 0,
    recommended: false,
    characteristics: {},
    summary: '',
    body: '',
    name: '',
    email: '',
    photos: []
  })

  const [characteristics, setCharacteristics] = useState({})

  const changeHandler = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
    console.log('changeHandler clicked!', e.target.name)
  }

  useEffect(()=> {
    const fetchMetaData = async () => {

      const characteristics = await request.getMetaReviews(props.product.id)
      const metaChars = characteristics.data.characteristics;

      setCharacteristics(metaChars)
    }
    fetchMetaData();
  }, [])

  const handleCharacteristicChange = (name, value) => {
    setFormValues({
      ...formValues,
      characteristics: {
        ...formValues.characteristics,
        [name]: value
      }
    })
  }

  const handleSubmit = () => {
    const characteristicsData = {};
    Object.values(formValues.characteristics).forEach((item) => {
      characteristicsData[item.id] = item.value;
    });
    const {charactersistics, ...prunedFormValues} = formValues;
    const data = {
      ...prunedFormValues,
      characteristics: characteristicsData,
      product_id: props.product.id
    }
    request.postReview(data);
  }



  return (
  <div className="form-container">
    <form className="review-form">
      <div id="heading">
        <div>Write Your Review</div>
      </div>
      <div name="rating">
      <StarsRating rating={formValues.rating} isReadOnly={false} handleRatingChange={(rating)=>setFormValues({...formValues, rating: rating})}/>
      </div>
      <span id="recommend-form">
        <div>Recommend: </div>
        <label htmlFor='radio-yes'>Yes: </label>
        <input type="radio" id="radio-yes" value="yes" name="recommended" className="rec radio" onClick={()=> setFormValues({...formValues, recommended: true})}/>
        <label htmlFor='radio-no'>No: </label>
        <input type="radio" id="radio-no" value="no" name="recommended" className="rec radio" onClick={()=> setFormValues({...formValues, recommended: false})}/>
      </span>
      <div>
        <input type="text" name="name" placeholder="name" onChange={changeHandler}/>
        <input type="text" name="email" placeholder="email" onChange={changeHandler}/>
        <input type="text" name="summary" placeholder="summary" maxLength='60' onChange={changeHandler}/>
      </div>
      <div>
        <textarea id="body" type="text" name="body" placeholder="your review..." maxLength='1000' rows="4" onChange={changeHandler}/>
      </div>
      <Characteristic metaChars={characteristics} handleCharacteristicChange={handleCharacteristicChange}/>
      <button id="submit" onClick={handleSubmit}>Submit Review</button>
    </form>
  </div>
  )
}

export default ReviewForm;

const Characteristic = ({ metaChars, handleCharacteristicChange }) => {

  const chars = metaChars;
  const labels = {
    Size: [
      'A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide'
    ],
    Width: [
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide'
    ],
    Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'
    ],
    Quality: [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect'
    ],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ],
    Fit: [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ]
  };

  return Object.entries(metaChars).map(([characteristic, characteristicValue]) => (
    <div className='characteristics' key={characteristic}>
      <p>{characteristic}</p>
      {
        labels[characteristic].map((label, i) => (
          <div className='labels' key={`${label}${i}`}>
            <input id={`${label}${characteristic}`}
              key={`${label}${characteristic}`}
              type='radio' name={characteristic}
              data-value={i+1}
              className='char-radio'
              onChange={({ target: { name } }) => handleCharacteristicChange(name, { id: characteristicValue.id, value: i+1 })}/>
            <label htmlFor={label} key={`${characteristic}${label}`}>{label}</label>
          </div>
        ))
      }
    </div>
  ));
}