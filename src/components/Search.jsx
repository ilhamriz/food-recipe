import React from "react";
import "./Search.css";
import {search} from '../images'

function Search({mobileSize}) {
  return (
    <>
      <form action="" className="search-container">
        <input type="text" className='search__input' name="search" placeholder="Search Recipe"/>
        <button type="submit" className="btn-submit">
          {mobileSize ? <img src={search} alt=""/> : "Search"}
          {/* <img src={search} alt=""/>
          Search */}
        </button>
      </form>
    </>
  );
}

export default Search;
