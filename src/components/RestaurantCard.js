import React from 'react'

const RestaurantCard = ({cloudinaryImageId, name, cuisines}) => {
  return (
    <div className='card'>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
    </div>
  );
}

export default RestaurantCard