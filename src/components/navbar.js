import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Icon } from 'semantic-ui-react'

class NavBar extends Component {
   renderLinks() {
      return this.props.NavLinks.map((navLink) => {
         return (
            <Link to={navLink.address} key={navLink.link}>
              <Button animated color='orange'>
                <Button.Content hidden>{navLink.link} </Button.Content>
                <Button.Content visible>
                  <Icon name={navLink.icon} />
                </Button.Content>
              </Button>
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
