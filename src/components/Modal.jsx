import React from 'react'
import { Link } from 'react-router-dom';
import './Modal.css'

const Modal = ({ show, close, children }) => {
  if (!show) {
    return null;
  }
  else {
    return (
      <div className='modal-container'>
        <div className="modal-card">
          <div>
            {children}
            <button onClick={close}>&times;</button>
          </div>
          <Link to='/'>See my recipe</Link>
        </div>
      </div>
    )
  }
}

export default Modal
