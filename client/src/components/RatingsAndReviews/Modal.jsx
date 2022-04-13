import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import ReviewForm from './ReviewForm.jsx';

const Background = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 90%;
  background: #fff;
  overflow: hidden;
  color: black;
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  z-index: 10;
  border-radius: 10px
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  overflow: hidden
  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: none;
    color: none;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ setShowModal, product }) => {


  return (
    <div>
      {
        <Background>
          <ModalWrapper >
            <ModalContent>
              <ReviewForm product={product}/>
            </ModalContent>
            <CloseModalButton onClick={() => setShowModal(prev => !prev)}/>
          </ModalWrapper>
        </Background>
      }
    </div>
  )
}

export default Modal;