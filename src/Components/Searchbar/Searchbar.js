import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './style.css'

function Searchbar() {
  return (
    <div>
    <div className="search-box">
    <span className="searchtxt"> Anywhere </span>
    <span className="searchtxt"> Any week </span>
    <span className="searchtxtguests"> Add guests </span>
    <button>
      <FaSearch />
    </button>
  </div>
    </div>
  )
}

export default Searchbar
