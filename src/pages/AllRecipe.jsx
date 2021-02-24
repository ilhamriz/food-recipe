import React, { useEffect, useState } from "react";
import "../components/AllRecipe.css";
import axios from 'axios';
import CardFood from "../components/CardFood";
import { useLocation} from "react-router";
import Dropdown from "../components/Dropdown";

function AllRecipe() {
  let location = useLocation();
  const locationType = location.state.type;

  const [allData, setAllData] = useState([]);
  const [select, setSelect] = useState(location.state.value);
  const [dropdown, setDropdown] = useState(true);

  // useEffect(() => {    
  //   console.log(location.state);
  // })

  useEffect(() => {
    if (locationType === 'search') {
      setDropdown(false);
      getData(locationType, select);
    }
    else {
      getData(locationType, select);      
    }
  }, [])
  
  useEffect(() => {
    getData(locationType, select);
  }, [select])

  const handleSort = (event) => {
    event.preventDefault();
    setSelect(event.target.value);
  }

  const getData = (type, selectValue) => {
    axios.get(`http://localhost:3001/v1/recipes/${type}/${selectValue}`)
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
        {dropdown ?
          <Dropdown value={select} onChange={handleSort}>
            <option value="like">Popular</option>
            <option value="createdAt">Newest</option>
          </Dropdown>
          : null}
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
