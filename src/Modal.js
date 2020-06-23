import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
  const isOpen = true;
  return (
    <div className={`modal-overlay ${isOpen? `isModalOpen`: null}`}>
      <div className="modal-container">
        <h4>a name</h4>
        <p>some random paragraph</p>
        <buttno className="btn btn-primary">Close button</buttno>
      </div>
    </div>
  )
}

Modal.propTypes = {

}

export default Modal;