import React, { useState } from "react";
import "./Search.css";
import { searchIcon } from "../images";
import { Redirect } from "react-router";

function Search({ mobileSize }) {
  const [search, setSearch] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const submitSearch = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <>
      {submitted ? <Redirect to={{pathname:'/all-recipe', state:{type:'search', value:search}}} /> : null}
      <form onSubmit={submitSearch} className="search-container">
        <input
          type="text"
          className="search__input"
          name="search"
          placeholder="Search Recipe"
          value={search}
          onChange={handleSearch}
          required
        />
        <button type="submit" className="btn-primary">
          {mobileSize ? <img src={searchIcon} alt="" /> : "Search"}
        </button>
      </form>
    </>
  );
}

export default Search;
