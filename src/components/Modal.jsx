import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
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
            <lottie-player className='modal-gif' src="https://assets9.lottiefiles.com/temp/lf20_xG4aYa.json" speed="1" autoplay />
            <p>Your recipe has been published successfully</p>
          </div>
          <Link to='/' className='modal__btn'>
            <Button className='btn-primary'>
                See my recipe
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Modal
