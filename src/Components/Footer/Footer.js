import React, { Component } from 'react'
import "./style.css"; 
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <div>
      <footer>
      <div class="container">
        <div class="row">
          <div>
            <p>&copy; 2023 Gytis Nenius &middot; <a href="#">Terms</a> &middot; <a href="#">Sitemap</a> &middot; 
            <Link to="/privacy"> Privacy</Link> &middot; <a href="#">Your Privacy Choices</a></p>
           </div>
         </div>
        </div>
    </footer>
    
      </div>
    )
  }
}

export default Footer;
