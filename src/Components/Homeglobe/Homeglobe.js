import React from 'react'
import { FaGlobe } from 'react-icons/fa';
import './style.css'

function Homeglobe() {
  return (
    <div>
    <div className="user-menu">
    <span className="searchtxtguests"> Airbnb your home </span>
    <button>
      <FaGlobe />
    </button>
  </div>
    </div>
  )
}

export default Homeglobe
