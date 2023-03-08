import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import simmerUI from './simmerUI'

const Body = () => {
  let ResData = [];
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING";

  const [Restaurants, setRestaurants] = useState(simmerUI());

  const fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    ResData = data.data.cards[2].data.data.cards;
    setRestaurants(ResData);
    // console.log(ResData)
  };
  useEffect(() => {
    // console.log("render");
    fetchData();
  }, []);
  return (
    <>
      <Search/>
      <div className="foodCard">
        {Restaurants.map((x) => {
          return <RestaurantCard {...x.data} key={x.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
