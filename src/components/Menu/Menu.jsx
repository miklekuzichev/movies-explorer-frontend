import React from 'react';
import Modal from '../Modal/Modal';
import MobileAccountNavList from '../MobileAccountNavList/MobileAccountNavList';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Menu({
  isOpen,
  onClose,
}) {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Header/>
      <Modal.Body>
        <MobileNavigation
          onModalClose={onClose}/>
      </Modal.Body>
      <Modal.Footer>
        <MobileAccountNavList
          onModalClose={onClose}/>
      </Modal.Footer>
    </Modal>
  )
}

export default Menu;
