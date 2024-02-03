import React, { createContext, useContext } from 'react';
import { createPortal } from 'react-dom';

const modalContext = createContext();

function Modal({
  children,
  isOpen,
  onClose,
}) {

  return createPortal(
    <div
      className='menu-modal overlay'>
      <div className='menu-modal__container'>
        <div className='menu-modal__content'>
          <modalContext.Provider value={onClose}>
            {children}
          </modalContext.Provider>
        </div>
      </div>
    </div>,
    document.body
  )
}

Modal.Header = function ModalHeader(props) {
  const onClose = useContext(modalContext);

  return (
    <header className='menu-modal__header'>
      {props.children}
      <button
        className='menu-modal__close_button'
        title="закрыть модальное окно"
        onClick={onClose}
      />
    </header>
  )
}

Modal.Body = function ModalBody(props) {
  return (
    <main className='menu-modal__main'>
      {props.children}
    </main>
  )
}

Modal.Footer = function ModalFooter(props) {
  return (
    <footer className='menu-modal__footer'>
      {props.children}
    </footer>
  )
}

export default Modal;
