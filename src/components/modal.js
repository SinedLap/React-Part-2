import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const Modal = ({ isOpen, title, body, hide }) => isOpen ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={hide}>
      <div className="modal">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;

