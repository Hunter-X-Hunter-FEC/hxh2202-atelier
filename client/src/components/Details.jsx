import React from 'react';
import Logo from '../assets/Logo.png';
import styled from 'styled-components';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Overview from './Overview/Overview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import Modal from './RatingsAndReviews/Modal.jsx';

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
  console.log('selected in details', selected);
  return (
    <Container>
      <OverviewStyle>
        <Overview product={selected}/>
      </OverviewStyle>
      <RelatedStyle>
        <RelatedItems selected={selected}/>
      </RelatedStyle>
      <ReviewsStyle>
        <RatingsAndReviews product={selected}/>
      </ReviewsStyle>
      {/* {showModal && <Modal setShowModal={setShowModal} product={selected}/>} */}
    </Container>
  )
}

export default Details;