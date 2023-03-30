import React from 'react';
import { FaAirbnb } from 'react-icons/fa';

import './style.css'

function Airbnb_logo() {
  return (
       
            <div className="header-container">
                <div className="logo">
                <i> <FaAirbnb /> </i>
                <span className="logotxt">airbnb</span>
                </div>
            </div>
  
  
  );
}

export default Airbnb_logo;
