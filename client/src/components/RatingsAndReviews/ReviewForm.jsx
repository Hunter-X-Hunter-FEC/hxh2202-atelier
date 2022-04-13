import React, { useState, useEffect } from 'react';
import StarsRating from '../Ratings/StarsRating.jsx';
import styled from 'styled-components';
const request = require('../Request.js');

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

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

  // const buildCharacteristicForm = () => {
  //   for (let key in characteristics) {
  //     formValues.characteristics[key] = {}
  //   }
  //   console.log('characteristic form: ',formValues.characteristics);
  // }

  useEffect(()=> {
    const fetchMetaData = async () => {

      const characteristics = await request.getMetaReviews(props.product.id)
      const metaChars = characteristics.data.characteristics;

      setCharacteristics(metaChars)
    }
    fetchMetaData();
  }, [])

  // buildCharacteristicForm();

  return (
  <div className="form-container">
    <form className="review-form">
      <div id="heading">
        <div>Write Your Review</div>
      </div>
      <StarsRating rating={formValues.rating} isReadOnly={false} onClick={(rating) => { setFormValues({rating: rating})}}/>
      <span id="recommend-form">
        <div>Recommend: </div>
        <label htmlFor='radio-yes'>Yes: </label>
        <input type="radio" id="radio-yes" name="recommend" className="rec radio" onClick={()=> setFormValues({recommended: true})}/>
        <label htmlFor='radio-no'>No: </label>
        <input type="radio" id="radio-no" name="recommend" className="rec radio" onClick={()=> setFormValues({recommended: false})}/>
      </span>
      <div>
        <input type="text" name="name" placeholder="name" onChange={e => setFormValues({name: e.target.value})}/>
        <input type="text" name="email" placeholder="email" onChange={e => setFormValues({email: e.target.value})}/>
        <input type="text" name="summary" placeholder="summary" maxLength='60' onChange={e => setFormValues({summary: e.target.value})}/>
      </div>
      <div>
        <textarea id="body" type="text" name="body" placeholder="your review..." maxLength='1000' rows="4" onChange={e => setFormValues({body: e.target.value})}/>
      </div>
      <Characteristic metaChars={characteristics}/>
      <input id="submit" type="submit"/>
    </form>
  </div>
  )
}

export default ReviewForm;

const Characteristic = ({ metaChars }) => {
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

  return Object.keys(metaChars).map(char => (
    <div className='characteristic' key={char}>
      <p>{char}</p>
    </div>
  ));
}