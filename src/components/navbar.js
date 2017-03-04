import React, { Component, PropTypes as T } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthService from './../utils/AuthService';
import { Button, Icon } from 'semantic-ui-react';

export class NavBar extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

   renderLinks() {
      return this.props.NavLinks.map((navLink) => {
         return (
            <Link to={navLink.address} key={navLink.link}>
              <Button animated animated='fade' color='orange'>
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
    const { auth } = this.props
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
