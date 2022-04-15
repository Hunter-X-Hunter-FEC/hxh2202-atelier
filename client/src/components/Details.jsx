import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import styled from 'styled-components';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Overview from './Overview/Overview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import Modal from './RatingsAndReviews/Modal.jsx';
import {useParams} from 'react-router-dom';
const request = require('./Request.js');

const Container = styled.div`
width: 100%;
height: 100%
display: flex;
flex-direction: column;
`
const OverviewStyle = styled.div`
flex: 1;
width: 100vw;
height: 100vh;
// background-color:red;
`

const RelatedStyle = styled.div`
flex: 1;
width: 100vw;
height: 160vh;
// background-color:yellow;
`
const ReviewsStyle = styled.div`
flex: 1;
width: 100%vw;
heigth: 40vh;
// background-color:green;
`


function Details({selected}) {
  const [proDetail, setProDetail] = useState(localStorage.getItem('selected') ? JSON.parse(localStorage.getItem('selected')) : selected)
  const {productId} = useParams()


  useEffect(()=>{
    const productInfo = async () => {
      let details = await request.getProductDetails(productId)
      let styles = await request.getProductStyles(productId)
      let curProductDetails = details.data;
      let curProductStyles = styles.data;
      curProductDetails['style'] = curProductStyles.results;
      setProDetail(curProductDetails)
    }
    productInfo()
  }, [productId])

  useEffect(()=>{

    setProDetail(proDetail)
    localStorage.setItem('selected', JSON.stringify(proDetail))
  }, [proDetail])

  return (
    <Container>
      <OverviewStyle>
        <Overview product={proDetail}/>
      </OverviewStyle>
      <RelatedStyle>
        <RelatedItems selected={proDetail}/>
      </RelatedStyle>
      <ReviewsStyle>
        <RatingsAndReviews product={proDetail} />
      </ReviewsStyle>
    </Container>
  )
}

export default Details;