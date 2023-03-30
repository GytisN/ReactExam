import React from 'react';
import Airbnb_logo from '../Airbnb_logo/Airbnb_logo';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { FaSearch } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './privacy.css';

function Privacy() {
  return (
    <div >
      <div>
      <Airbnb_logo />
      <div className="search-box">
        <span className="searchtxtguests"> Search How-tos and more </span>
        <button>
          <FaSearch />
        </button>
      </div>
      <Login />
      <div>
      <p>
      <Link to="/">Home</Link>
      <BiChevronRight />
      <a href="#">All Topics</a>
      <BiChevronRight />
      <a href="#">Legal Terms</a>
      <BiChevronRight />
      <a href="#">Privacy Policy</a>
      <BiChevronRight />
      <a href="#">Airbnb Privacy</a>
    </p>
      </div>
      </div>

      <h4>Legal Terms</h4>
      <h1>Airbnb Privacy</h1>
      <img src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt1218bbc6d8c51315/61dcad421757dc6aed2ade70/airbnb-privacy.jpeg" alt="airbnb-privacy"></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Footer />
    </div>
  );
}

export default Privacy;
