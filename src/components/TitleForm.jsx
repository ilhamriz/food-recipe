import React from 'react'
import './TitleForm.css'
import {titleForm} from '../images'

function TitleForm() {
  return (
    <div className='title-form-container'>
      <h1 id='title-form'>Sharing will bring you a thousand goodness</h1>
      <img src={titleForm} id='title-form-img' alt=""/>
    </div>
  )
}

export default TitleForm
