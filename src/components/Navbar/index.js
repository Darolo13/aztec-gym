import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <div className='navigation'>
          <Link to="/">LOGO</Link>
          <Link to="/about"> ABOUT</Link>
          <Link to="/workouts"> WORKOUTS</Link>
          <Link to="/nutrition"> NUTRITION</Link>
          <Link to="/stories"> STORIES</Link>
          <Link to="/contact-us" > CONTACT</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
