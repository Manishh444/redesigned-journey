import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import Search from "./Search";
// import SimmerUI from './simmerUI'


 const SearchRestaurant = (searchText, restaurants) => {
   const ResultRest = restaurants.filter((x) => {
     return x?.data?.name.toLowerCase()?.includes(searchText.toLowerCase());
   });
   // console.log(ResultRest)
   return ResultRest;
 };

const Body = () => {
  // let ResData = [];
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING";

   
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    // ResData = data?.data?.cards[2]?.data?.data?.cards;
    const ResData = data?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(ResData);
    setFilteredRestaurants(ResData);
    // console.log(ResData)
  };
  useEffect(() => {
    // console.log("render");
    fetchData();
  }, []);
  return (
    <>
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
            setFilteredRestaurants(SerchResult);
          }}
        >
          Search
        </button>
      </div>
      <div className="foodCard">
        {filteredRestaurants.map((x) => {
          return <RestaurantCard {...x.data} key={x.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
