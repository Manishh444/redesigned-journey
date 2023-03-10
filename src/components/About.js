import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h3><Link to={"/"}>Back to home</Link></h3>
    </div>
  );
}

export default About