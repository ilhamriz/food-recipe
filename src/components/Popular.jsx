import React from "react";
import "./Popular.css";
import { food1, thumbsUp } from "../images";
import { Link } from "react-router-dom";

function Popular({ getDataPopular }) {
  return (
    <div className="popular">
      <div className="container">
        <div className="popular__title">
          <section>
            <h2>Popular</h2>
            <p className="popular__subtitle">
              Most popular recipes based on the number of likes
            </p>
          </section>
          <Link
            to={{
              pathname: "/all-recipe",
              state: { type: "sort", value: "like" },
            }}
            className="link-primary"
          >
            View All
          </Link>
        </div>
        <div className="popular__body">
          {getDataPopular ? (
            <Link to={{pathname:'/recipe', state:{foodId:getDataPopular[0]._id}}} className="popular__body-container">
              <div className="popular__body-image-one">
                <img src={getDataPopular[0].url_image} alt="Popular-One" />
              </div>
              <div className="popular__body-text">
                <h3 className="popular__body-title-food">
                  {getDataPopular[0].title}
                </h3>
                <p className="popular__body-caption-food">
                  {getDataPopular[0].body}
                </p>
                <section className="popular__food-details">
                  <div className="popular__food-info">
                    <section className="food-info">
                      <p>Time</p>
                      <p>{getDataPopular[0].duration}</p>
                    </section>
                    <section className="food-info">
                      <p>Portion</p>
                      <p>{getDataPopular[0].portion} pers</p>
                    </section>
                    <section className="food-info">
                      <p>Difficulty</p>
                      <p>{getDataPopular[0].difficulty}</p>
                    </section>
                  </div>
                  <div className="popular__food-likes">
                    <img src={thumbsUp} alt="" />
                    <p>{getDataPopular[0].like}</p>
                  </div>
                </section>
              </div>
            </Link>
          ) : null}

          <div className="popular__body-container">
            {getDataPopular &&
              getDataPopular.slice(1, 3).map((val, idx) => {
                return (
                  <Link to={{pathname:'/recipe', state:{foodId:val._id}}} className="popular__body-two" key={idx}>
                    <div className="popular__body-image-two">
                      <img src={val.url_image} alt="Popular-One" />
                    </div>
                    <div className="popular__body-text">
                      <h3 className="popular__body-title-food">{val.title}</h3>
                      <p className="popular__body-caption-food">{val.body}</p>
                      <section className="popular__food-details">
                        <div className="popular__food-info">
                          <section className="food-info">
                            <p>Time</p>
                            <p>{val.duration}</p>
                          </section>
                          <section className="food-info">
                            <p>Portion</p>
                            <p>{val.portion} pers</p>
                          </section>
                          <section className="food-info">
                            <p>Difficulty</p>
                            <p>{val.difficulty}</p>
                          </section>
                        </div>
                        <div className="popular__food-likes">
                          <img src={thumbsUp} alt="" />
                          <p>{val.like}</p>
                        </div>
                      </section>
                    </div>
                  </Link>
                );
              })}
            {/* <Link to='/recipe' className="popular__body-two">
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
            </Link>
            
            <Link to='/recipe' className="popular__body-two">
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
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
