import React, { useState } from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import './style.css'

function Login() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <div className="login-box">
        <button >
          <FaBars />
        </button>
        <button onClick={toggleMenu}>
          <FaUser />
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <a href="/">
              <b>Signup</b>
            </a>
            <a href="/">Log in</a>
            <hr className="line" />
            <a href="/">Airbnb your home</a>
            <a href="/">Host an experience</a>
            <a href="/">Help</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
