import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import ReviewForm from './ReviewForm.jsx';

const Background = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  z-index: 3000;
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 90%;
  background: #fff;
  overflow: hidden;
  color: black;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
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
`;

const Modal = ({ setShowModal, product }) => {
  return ReactDOM.createPortal(
    <Background>
      <ModalWrapper >
        <CloseModalButton onClick={() => setShowModal(prev => !prev)}/>
        <ModalContent>
          <ReviewForm product={product}/>
        </ModalContent>
      </ModalWrapper>
    </Background>,
    document.body
  );
}

export default Modal;