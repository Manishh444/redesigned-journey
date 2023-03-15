import React, { useState, useContext } from "react";
import { GlobalInfo } from "./Body.js";
import { SearchRestaurant } from "./Body.js";

//  const SearchRestaurant = (searchText, restaurants) => {
//    const ResultRest = restaurants.filter((x) => {
//      return x?.data?.name.toLowerCase()?.includes(searchText.toLowerCase());
//    });
//    // console.log(ResultRest)
//    return ResultRest;
//  };
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const allRestaurants = useContext(GlobalInfo)
  console.log({allRestaurants})
  return (
     <div>
        <input
          type="type"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const SerchResult = SearchRestaurant(searchText, allRestaurants);
            console.log(SerchResult);
            // setFilteredRestaurants(SerchResult);
          }}
        >
          Search
        </button>
      </div> 
  );
};

export default Search;
