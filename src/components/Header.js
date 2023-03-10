import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
        <img src="" alt="logo" />
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About US</Link>
          </li>
          <li>Career</li>
          <li>cart</li>
        </ul>
      </div>
    </>
  );
}

export default Header