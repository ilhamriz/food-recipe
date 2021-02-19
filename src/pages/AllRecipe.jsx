import React, { useEffect, useState } from "react";
import "../components/AllRecipe.css";
import axios from 'axios';
import CardFood from "../components/CardFood";
import { useLocation} from "react-router";

function AllRecipe() {
  let location = useLocation();
  const [allData, setAllData] = useState([]);
  const [select, setSelect] = useState(location.state);

  useEffect(() => {
    // console.log(location.state);
    getData(select);
  }, [])
  
  useEffect(() => {
    getData(select);
  }, [select])

  const handleSort = (event) => {
    event.preventDefault();
    setSelect(event.target.value);
  }

  const getData = (selectValue) => {
    axios.get(`http://localhost:3001/v1/recipes/sort/${selectValue}`)
      .then(res => {
        setAllData(res.data);
      })
      .catch(err => console.log(err))
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
    <div className="all-recipe">
      <div className="container">
        <div className="dropdown-container">
          <select className='dropdown' value={select} onChange={handleSort}>
            <option value="like">Popular</option>
            <option value="date">Newest</option>
          </select>
          <div className="select-icon">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
          </div>
        </div>
        <div className="all-recipe__card-container">
          {allData.map((val, idx) => {
            return (
              <CardFood
                key={idx}
                image={val.url_image}
                title={val.title}
                caption={val.body}
                time={minutesToHour(val.duration)}
                portion={val.portion}
                difficulty={val.difficulty}
                like={val.like}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default AllRecipe;
