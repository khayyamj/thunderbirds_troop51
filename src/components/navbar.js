import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class NavBar extends Component {
   renderLinks() {
      return this.props.NavLinks.map((navLink) => {
         return (
            <Link to={navLink.address} className="ui orange button" key={navLink.link}>
              <div className="ui animated button">
                <div className="hidden content">{navLink.link} </div>
                <div className="visible content">
                  <i className={navLink.icon}></i>
                </div>
              </div>
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
