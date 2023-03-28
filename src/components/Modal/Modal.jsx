import propTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Backdrop, Button, ModalWrapper, Title, Wrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onClose, title }) {
  useEffect(() => {
    const onPessKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onPessKeyDown);

    return () => window.removeEventListener('keydown', onPessKeyDown);
  }, [onClose]);

  const onBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackDropClick}>
      <ModalWrapper>
        <Wrapper>
          <Title>{title}</Title>
          <Button type="button" onClick={onClose}>
            <AiOutlineClose />
          </Button>
        </Wrapper>
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
}

Modal.prototype = {
  children: propTypes.element,
  onClose: propTypes.func.isRequired,
  title: propTypes.string,
};

export default Modal;
