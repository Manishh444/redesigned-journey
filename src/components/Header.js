import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
        <img src="" alt="logo" />
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About US</Link>
          </li>
          <li>Career</li>
          <li>cart</li>
          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header