import React, { useState } from "react";
import Button from "./Button";
import CardFood from "./CardFood";
import "./RecipeHome.css";

function RecipeHome({ getDataByLike }) {
  const [limit, setLimit] = useState(3);
  // const [maxLimit, setMaxLimit] = useState(initialState)

  const addLimit = () => {
    setLimit(limit + 3);
  }

  const minutesToHour = (duration) => {
    if (duration >= 60) {
      let hour = Math.floor(duration / 60);
      let minutes = duration % 60;
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
                  idx < limit ? 
                  <CardFood                    
                    key={idx}
                    image={val.url_image}
                    title={val.title}
                    caption={val.body}
                    time={minutesToHour(val.duration)}
                    portion={val.portion}
                    difficulty={val.difficulty}
                    like={val.like}
                  /> : null 
              )
            })}
        </div>
        <div className="button-center">
          {limit <= (getDataByLike && getDataByLike.length) ?
          <Button className='btn-secondary' onClick={addLimit}>
            Load more Recipes
          </Button> : null }
        </div>
      </div>
    </div>
  );
}

export default RecipeHome;

// caption={val.body.length > 70 ? val.body.slice(0, 70) + '...' : val.body}