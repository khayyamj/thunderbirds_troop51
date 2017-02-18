import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {

  render() {
    return(
      <div className="navbar">
         <ul className="navigation">
            <Link to="/calendar" className="nav-btn"><li>Calendar</li></Link>
            <Link to="/summer-camp" className="nav-btn"><li>Summer Camp</li></Link>
            <Link to="/advancement" className="nav-btn"><li>Advancement</li></Link>
            <Link to="/roster" className="nav-btn"><li>Roster</li></Link>
            <Link to="/about" className="nav-btn"><li>About</li></Link>
            <Link to="/" className="nav-btn"><li>Login</li></Link>
         </ul>
      </div>
    );
  }
}
export default NavBar;
