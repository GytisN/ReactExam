import React from 'react';
import Airbnb_logo from '../Airbnb_logo/Airbnb_logo';
import Searchbar from '../Searchbar/Searchbar';
import Homeglobe from '../Homeglobe/Homeglobe'
import Login from '../Login/Login'
import './style.css';

function Header() {
 

  return (
    <header>
    <div className="header-container">
      <div>
        <Airbnb_logo />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <Homeglobe />
      </div>
      <div>
        <Login />
      </div>
    </div>
  </header>
  );
}

export default Header;
