import React from 'react'
import {useParams} from 'react-router-dom'
const RestaurantMenu = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>RestaurantMenu</div>
  )
}

export default RestaurantMenu