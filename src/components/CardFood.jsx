import React from 'react'
import './CardFood.css'
import {food1,thumbsUp} from '../images'

function CardFood({
  image,
  title,
  caption,
  time,
  portion,
  difficulty,
  like
}) {
  return (
    <div className='card-food'>
      <div className="card-food__image">
        <img src={image} alt="food"/>
      </div>
      <div className="card-food__body">
        <h3 className='card-food__title'>{title}</h3>
        <p className='card-food__caption'>{caption}</p>
        <section className="card-food__details">
          <div className="card-food__info">
            <section>
              <p>Time</p>
              <p>{time}</p>
            </section>
            <section>
              <p>Portion</p>
              <p>{portion} pers</p>
            </section>
            <section>
              <p>Difficulty</p>
              <p>{difficulty}</p>
            </section>
          </div>
          <div className="card-food__likes">
            <img src={thumbsUp} alt=""/>
            <p>{like}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CardFood
