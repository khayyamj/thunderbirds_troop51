import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class NavBar extends Component {
   renderLinks() {
      return this.props.NavLinks.map((navLink) => {
         return (
            <Link to={navLink.address} className="nav-btn" key={navLink.link}>
               <li>{navLink.link}</li>
            </Link>
         )
      });
   }

  render() {
    return(
      <div className="navbar">
         <ul className="navigation">
            {this.renderLinks()}

         </ul>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
   return {
      NavLinks: state.navLinks
   }
}

export default connect(mapStateToProps)(NavBar);
