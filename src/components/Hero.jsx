import React, { useEffect, useState } from 'react';
import './Hero.css'
import Search from './Search';
import {heroLeft,heroRight} from '../images'

function Hero() {
  const [mobileSize, setMobileSize] = useState(false)
  
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobileSize(true);
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', windowChange)
  })

  const windowChange = () => {
    if (window.innerWidth <= 768) {
      setMobileSize(true);
    }
    else {
      setMobileSize(false);
    }
  }

  return (
    <div className='hero'>
      <div className="container">
        <img src={heroLeft} alt="" className="hero-image__left"/>
        <div className="hero-container">
          <h1 className='hero-title'>Delicious Recipes at Your Fingertips</h1>
          <p className='hero-subtitle'>Your smart cooking sidekick, offering personalized guidance every step of the way.</p>
          <Search mobileSize={mobileSize}/>
        </div>        
        <img src={heroRight} alt="" className="hero-image__right"/>
      </div>
    </div>
  )
}

export default Hero
