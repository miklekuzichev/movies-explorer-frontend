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
      className='menu__modal overlay'>
      <div className='menu__modal-container'>
        <div className='menu__modal-content'>
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
    <header className='menu__modal-header'>
      {props.children}
      <button
        className='menu__modal_close-button'
        title="закрыть модальное окно"
        onClick={onClose}
      />
    </header>
  )
}

Modal.Body = function ModalBody(props) {
  return (
    <main className='menu__modal-main'>
      {props.children}
    </main>
  )
}

Modal.Footer = function ModalFooter(props) {
  return (
    <footer className='menu__modal-footer'>
      {props.children}
    </footer>
  )
}

export default Modal;
