import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
const RestaurantMenu = () => {
  const[RestaurantMenu, setRestaurantMenu] = useState([])
  useEffect(()=>{
    getRestaurantMenu()
  },[])

  async function getRestaurantMenu(){
    let restaurantdata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=36900&submitAction=ENTER"
    );
    let json = await restaurantdata.json();
    console.log(json);
  }
    const params = useParams();
    console.log(params)
  return (
    <div>RestaurantMenu</div>
  )
}

export default RestaurantMenu