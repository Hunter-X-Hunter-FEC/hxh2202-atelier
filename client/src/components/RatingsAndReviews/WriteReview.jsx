import React, { useState } from 'react';
import Stars from '../Ratings/Stars.jsx'
import ReviewForm from './ReviewForm.jsx';
import styled from 'styled-components';
import Modal from './Modal.jsx'

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 2vh;
`


const Button = styled.button`
  // min-width: 100px;
  // padding: 16px 32px;
  // border-radius: 4px;
  // border: none;
  // background: #141414;
  // color: #fff;
  // font-size: 16px;
  // cursor: pointer;
`;

const WriteReview = (props) => {

  const [isWritingReview, setIsWritingReview] = useState(false)
  // const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    props.setShowModal(prev => !prev);
  }

  return (
    <>
      <Container>
        <Button onClick={openModal}>Write Review</Button>
      </Container>

    </>

  );
}



export default WriteReview;