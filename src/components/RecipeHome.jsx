import React from "react";
import CardFood from "./CardFood";
import "./RecipeHome.css";

function RecipeHome({ getDataByLike }) {
  const minutesToHour = (duration) => {
    let hour;
    let minutes;
    if (duration >= 60) {
      hour = Math.floor(duration / 60);
      minutes = duration % 60;
      if (minutes === 0) {
        return `${hour} h`
      }
      else {
        return `${hour} h ${minutes} m`        
      }
    }
    else {
      return `${duration} m`;
    }
  }
  return (
    <div className="recipe-home">
      <div className="container">
        <h2 className="recipe-home__title">All Recipe</h2>
        <div className="recipe-home__wrapper">
          {getDataByLike &&
            getDataByLike.map((val, idx) => {
              return (
                <>
                  <CardFood
                    key={idx}
                    image={val.url_image}
                    title={val.title}
                    caption={val.body}
                    time={minutesToHour(val.duration)}
                    portion={val.portion}
                    difficulty={val.difficulty}
                    like={val.like}
                  // caption={val.body.length > 70 ? val.body.slice(0, 70) + '...' : val.body}
                />
                </>
              )
            })}
          
          {/* <CardFood />
          <CardFood />
          <CardFood />
          <CardFood /> */}
        </div>
      </div>
    </div>
  );
}

export default RecipeHome;
