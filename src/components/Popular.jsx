import React from 'react'
import './Popular.css'
import {food1,thumbsUp,clock,barChart,users} from '../images'

function Popular({
  getDataByLike
}) {
  return (
    <div className='popular'>
      <div className="container">
        {/* {getDataByLike.map((val, idx) => {
          return (
            <p key={idx}>{val.like}</p>
          )
        })} */}
        <div className="popular__title">
          <section>
            <h2>Popular</h2>
            <p className='popular__subtitle'>Most popular recipes based on the number of likes</p>
          </section>
          <p>View All</p>
        </div>
        <div className="popular__body">
          <div className="popular__body-container">
            <div className="popular__body-image-one">
              <img src={food1} alt="Popular-One"/>
            </div>
            <div className="popular__body-text">
              <h3 className='popular__body-title-food'>Catherine's Spicy Chicken Soup</h3>
              <p className='popular__body-caption-food'>This is a great recipe that you can fix to your taste! The longer it simmers the better...</p>
              <section className="popular__food-details">
                <div className="popular__food-info">
                  <section className='food-info'>                    
                    <p>Time</p>
                    <p>45m</p>
                  </section>
                  <section className='food-info'>                    
                    <p>Portion</p>
                    <p>8 pers</p>
                  </section>
                  <section className='food-info'>
                    <p>Difficulty</p>
                    <p>Medium</p>
                  </section>
                </div>
                <div className="popular__food-likes">
                  <img src={thumbsUp} alt=""/>
                  <p>{getDataByLike && getDataByLike[0].like}</p>
                  {/* <p>150</p> */}
                </div>
              </section>
            </div>
          </div>
          
          <div className='popular__body-container'>
            <div className="popular__body-two">
              <div className="popular__body-image-two">
                <img src={food1} alt="Popular-One"/>
              </div>
              <div className="popular__body-text">
                <h3 className='popular__body-title-food'>Crustless Spinach Quiche</h3>
                <p className='popular__body-caption-food'>This is a great recipe that you can fix to your taste! The longer it simmers the better...</p>
                <section className="popular__food-details">
                  <div className="popular__food-info">
                    <section className='food-info'>
                      <p>Time</p>
                      <p>45m</p>
                    </section>
                    <section className='food-info'>
                      <p>Portion</p>
                      <p>8 pers</p>
                    </section>
                    <section className='food-info'>
                      <p>Difficulty</p>
                      <p>Medium</p>
                    </section>
                  </div>
                  <div className="popular__food-likes">
                    <img src={thumbsUp} alt=""/>
                    <p>150</p>
                  </div>
                </section>
              </div>
            </div>
            
            <div className="popular__body-two">
              <div className="popular__body-image-two">
                <img src={food1} alt="Popular-One"/>
              </div>
              <div className="popular__body-text">
                <h3 className='popular__body-title-food'>Crustless Spinach Quiche</h3>
                <p className='popular__body-caption-food'>This is a great recipe that you can fix to your taste! The longer it simmers the better...</p>
                <section className="popular__food-details">
                  <div className="popular__food-info">
                    <section className='food-info'>
                      <p>Time</p>
                      <p>45m</p>
                    </section>
                    <section className='food-info'>
                      <p>Portion</p>
                      <p>8 pers</p>
                    </section>
                    <section className='food-info'>
                      <p>Difficulty</p>
                      <p>Medium</p>
                    </section>
                  </div>
                  <div className="popular__food-likes">
                    <img src={thumbsUp} alt=""/>
                    <p>150</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular
